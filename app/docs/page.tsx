"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DocsPage() {
  return (
    <main className="flex flex-col min-h-dvh">
      <div className="flex-1 px-4 py-12 max-w-4xl mx-auto">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Extension Documentation
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete guide to using our form auto-fill browser extension
          </p>
        </motion.div>

        {/* Features Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Complete Privacy</h4>
                      <p className="text-sm text-muted-foreground">All data stays on your device, never uploaded to any server</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Multiple File Formats</h4>
                      <p className="text-sm text-muted-foreground">Supports JSON, CSV, and TXT files</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Smart Field Detection</h4>
                      <p className="text-sm text-muted-foreground">Automatically detects and maps form fields</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Google Forms Support</h4>
                      <p className="text-sm text-muted-foreground">Enhanced compatibility with Google Forms and complex web forms</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Customizable Mappings</h4>
                      <p className="text-sm text-muted-foreground">Configure how your data fields map to form inputs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Visual Feedback</h4>
                      <p className="text-sm text-muted-foreground">See which fields will be filled before auto-filling</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Cross-Site Compatibility</h4>
                      <p className="text-sm text-muted-foreground">Works on most websites with form inputs</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Installation Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Installation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold mb-2">From Firefox Add-ons Store</p>
                <Button asChild>
                  <Link href=" https://addons.mozilla.org/addon/formease-v1/" target="_blank" rel="noopener noreferrer">
                    Install from Firefox Add-ons
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Usage Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Usage</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step 1 */}
              <div>
                <h3 className="text-xl font-semibold mb-4">1. Prepare Your Data File</h3>
                <p className="mb-4 text-muted-foreground">Create a file with your personal information in one of these formats:</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">JSON Format (recommended)</h4>
                    <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm"><code>{`{
   "firstName": "John",
   "lastName": "Doe",
   "email": "john.doe@example.com",
   "phone": "+1-555-123-4567",
   "street": "123 Main Street",
   "city": "Anytown",
   "state": "CA",
   "zipCode": "12345",
   "company": "Example Corp"
}`}</code></pre>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">CSV Format</h4>
                    <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm"><code>{`firstName,lastName,email,phone,street,city,state,zipCode
John,Doe,john.doe@example.com,+1-555-123-4567,123 Main Street,Anytown,CA,12345`}</code></pre>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">TXT Format</h4>
                    <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm"><code>{`firstName: John
lastName: Doe
email: john.doe@example.com
phone: +1-555-123-4567
street: 123 Main Street
city: Anytown
state: CA
zipCode: 12345`}</code></pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div>
                <h3 className="text-xl font-semibold mb-4">2. Upload Your Data</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Click the extension icon in your Firefox toolbar</li>
                  <li>• Click "Drop your file here" or drag and drop your data file</li>
                  <li>• The extension will validate and store your data locally</li>
                </ul>
              </div>

              {/* Step 3 */}
              <div>
                <h3 className="text-xl font-semibold mb-4">3. Fill Forms</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Navigate to any webpage with a form</li>
                  <li>• Click the extension icon</li>
                  <li>• Click "Fill Form" to automatically populate detected fields</li>
                  <li>• Review and submit the form as needed</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Supported Field Types */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Supported Field Types</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">The extension automatically detects and fills these common form fields:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Personal Information</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• First name, last name, full name</li>
                    <li>• Email address</li>
                    <li>• Date of birth, gender</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Contact Details</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Phone, mobile number</li>
                    <li>• Address, city, state, zip code</li>
                    <li>• Country</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Professional</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Company name</li>
                    <li>• Job title, department</li>
                    <li>• Work phone</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Other</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• LinkedIn profile, website</li>
                    <li>• Comments, bio</li>
                    <li>• Custom fields</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Customizing Field Mappings */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        >
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Customizing Field Mappings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Modify Existing Mappings</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Click the extension icon</li>
                  <li>• Click "Field Mappings" to expand settings</li>
                  <li>• Modify existing mappings or add custom ones</li>
                  <li>• Click "Save Changes"</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Adding Custom Mappings</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Click "Add Custom Mapping"</li>
                  <li>• Enter the data field name (e.g., "middleName")</li>
                  <li>• Enter form field aliases separated by commas (e.g., "middle_name, mname, middle")</li>
                  <li>• Save your changes</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Privacy & Security */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Privacy & Security</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Local Processing</h4>
                      <p className="text-sm text-muted-foreground">All data processing happens on your device</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">No Network Requests</h4>
                      <p className="text-sm text-muted-foreground">Extension never sends data to external servers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Secure Storage</h4>
                      <p className="text-sm text-muted-foreground">Data is stored using Firefox's secure local storage</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">No Tracking</h4>
                      <p className="text-sm text-muted-foreground">Extension doesn't track your browsing or form submissions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">File Validation</h4>
                      <p className="text-sm text-muted-foreground">Uploaded files are validated for security</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Browser Compatibility */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
        >
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Browser Compatibility</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">This version is specifically optimized for Firefox and uses:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Manifest V2 (Firefox standard)</li>
                <li>• Firefox WebExtensions APIs</li>
                <li>• Firefox-specific storage and messaging systems</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Troubleshooting */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
        >
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Troubleshooting</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">File Upload Issues (Firefox-Specific)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Popup Closes During Upload:</strong> This is normal Firefox behavior when the file picker opens</li>
                  <li>• <strong>File Processing:</strong> Files are processed in the background even if popup closes</li>
                  <li>• <strong>Verification:</strong> Reopen the popup to see "Uploaded file" status</li>
                  <li>• <strong>File Requirements:</strong> Ensure file is under 5MB and uses supported formats (.json, .csv, .txt)</li>
                  <li>• <strong>File Format:</strong> Check that file content matches the expected structure</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Fields Not Being Filled</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Check if form fields are visible and enabled</li>
                  <li>• Customize field mappings in extension settings</li>
                  <li>• Some dynamic forms may require manual interaction first</li>
                  <li>• Ensure you have uploaded a data file first</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Google Forms Issues</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Make sure the form is fully loaded before filling</li>
                  <li>• Some Google Forms may require clicking on fields first</li>
                  <li>• Try filling fields individually if auto-fill doesn't work</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Back to Home */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
          className="text-center"
        >
          <Button asChild size="lg">
            <Link href="/">
              ← Back to Home
            </Link>
          </Button>
        </motion.div>
      </div>
    </main>
  );
}