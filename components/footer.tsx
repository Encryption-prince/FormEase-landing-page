"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  const [reviewForm, setReviewForm] = useState({
    name: '',
    rating: '5',
    content: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/subham-maity-6196aa248/",
      icon: LinkedInLogoIcon,
    },
    {
      name: "GitHub",
      href: "https://github.com/Encryption-prince",
      icon: GitHubLogoIcon,
    },
  ];

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!reviewForm.name.trim() || !reviewForm.content.trim()) {
      setSubmitMessage('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewForm),
      });

      if (response.ok) {
        setSubmitMessage('Thank you for your review!');
        setReviewForm({ name: '', rating: '5', content: '' });
      } else {
        setSubmitMessage('Failed to submit review. Please try again.');
      }
    } catch {
      setSubmitMessage('Failed to submit review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="w-full bg-card">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-8"
        >
          <Link
            href="/"
            className="text-3xl font-medium hover:opacity-80 transition-opacity"
          >
            FormEase
          </Link>
          
          {/* Write a Review Section */}
          <div className="flex flex-col items-center space-y-4 w-full max-w-md">
            <h3 className="text-lg font-semibold">Write a Review</h3>
            <form onSubmit={handleSubmitReview} className="w-full space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Your name"
                  value={reviewForm.name}
                  onChange={(e) => setReviewForm(prev => ({ ...prev, name: e.target.value }))}
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
                <select 
                  value={reviewForm.rating}
                  onChange={(e) => setReviewForm(prev => ({ ...prev, rating: e.target.value }))}
                  className="px-3 py-2 text-sm border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="5">⭐⭐⭐⭐⭐</option>
                  <option value="4">⭐⭐⭐⭐</option>
                  <option value="3">⭐⭐⭐</option>
                  <option value="2">⭐⭐</option>
                  <option value="1">⭐</option>
                </select>
              </div>
              <textarea
                placeholder="Share your experience..."
                rows={3}
                value={reviewForm.content}
                onChange={(e) => setReviewForm(prev => ({ ...prev, content: e.target.value }))}
                className="w-full px-3 py-2 text-sm border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                required
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Review'}
              </Button>
              {submitMessage && (
                <p className={`text-sm text-center ${submitMessage.includes('Thank you') ? 'text-green-600' : 'text-red-600'}`}>
                  {submitMessage}
                </p>
              )}
              <div className="flex gap-2">
                <Button asChild variant="outline" size="sm" className="flex-1">
                  <Link
                    href="/coming-soon?platform=chrome"
                  >
                    Chrome Store
                  </Link>
                </Button>
                <Button asChild size="sm" className="flex-1">
                  <Link
                    href="https://addons.mozilla.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Firefox Add-ons
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="flex-1">
                  <Link
                    href="/coming-soon?platform=edge"
                  >
                    Edge Add-ons
                  </Link>
                </Button>
              </div>
            </form>
          </div>

          <div className="flex space-x-3">
            {socialLinks.map((social) => (
              <Button
                key={social.name}
                asChild
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full hover:bg-muted/50"
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              </Button>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground">
            <span>© {year} FormEase</span>
            <span className="hidden sm:inline">•</span>
            <span className="font-medium">#SimplifyEveryFormYouMeet</span>
            <span className="hidden sm:inline">•</span>
            <span className="font-medium">❤️Made by Subham</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
