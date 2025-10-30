import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

export interface Review {
  name: string;
  rating: number;
  content: string;
  timestamp: string;
}

export async function getGoogleSheetsClient() {
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;

  if (!privateKey || !clientEmail) {
    throw new Error('Missing Google Sheets credentials');
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: SCOPES,
  });

  return google.sheets({ version: 'v4', auth });
}

export async function addReviewToSheet(review: Omit<Review, 'timestamp'>) {
  try {
    const sheets = await getGoogleSheetsClient();
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

    if (!spreadsheetId) {
      throw new Error('Missing spreadsheet ID');
    }

    const timestamp = new Date().toISOString();
    const values = [[review.name, review.rating, review.content, timestamp]];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Reviews!A:D',
      valueInputOption: 'RAW',
      requestBody: {
        values,
      },
    });

    return { success: true };
  } catch (error) {
    console.error('Error adding review to sheet:', error);
    throw error;
  }
}

export async function getReviewsFromSheet(): Promise<Review[]> {
  try {
    const sheets = await getGoogleSheetsClient();
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

    if (!spreadsheetId) {
      throw new Error('Missing spreadsheet ID');
    }

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Reviews!A:D',
    });

    const rows = response.data.values || [];
    
    // Skip header row if it exists
    const dataRows = rows.slice(1);
    
    return dataRows.map((row) => ({
      name: row[0] || '',
      rating: parseInt(row[1]) || 5,
      content: row[2] || '',
      timestamp: row[3] || '',
    }));
  } catch (error) {
    console.error('Error fetching reviews from sheet:', error);
    return [];
  }
}