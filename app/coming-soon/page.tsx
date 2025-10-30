"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ComingSoonContent() {
  const searchParams = useSearchParams();
  const platform = searchParams.get('platform');
  
  const platformInfo = {
    chrome: {
      name: "Chrome Web Store",
      icon: "🌐",
      color: "from-blue-500 to-green-500"
    },
    edge: {
      name: "Microsoft Edge Add-ons",
      icon: "🔷",
      color: "from-blue-600 to-blue-400"
    }
  };

  const currentPlatform = platformInfo[platform as keyof typeof platformInfo] || {
    name: "Browser Extension Store",
    icon: "🚀",
    color: "from-purple-500 to-pink-500"
  };

  return (
    <main className="flex flex-col min-h-dvh">
      <div className="flex-1 flex items-center justify-center px-4 py-24">
        <motion.div
          initial={{ y: 20, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.1 }}
          className="w-full max-w-2xl mx-auto text-center"
        >
          <Card className="border-2 border-dashed border-border/50">
            <CardContent className="p-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring", bounce: 0.3 }}
                className="text-6xl mb-6"
              >
                {currentPlatform.icon}
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-4"
              >
                <h1 className={`text-4xl font-bold bg-gradient-to-r ${currentPlatform.color} bg-clip-text text-transparent`}>
                  Coming Soon!
                </h1>
                
                <h2 className="text-xl font-semibold text-foreground">
                  {currentPlatform.name}
                </h2>
                
                <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                  We're working hard to bring our extension to {currentPlatform.name}. 
                  Stay tuned for updates and be the first to know when it's available!
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 space-y-4"
              >
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild>
                    <Link href="/#extension-form">
                      Get Notified When Ready
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/">
                      Back to Home
                    </Link>
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  In the meantime, try our extension on{" "}
                  <Link 
                    href="https://addons.mozilla.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    Firefox Add-ons
                  </Link>
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Background decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-3/4 left-3/4 w-24 h-24 bg-accent/5 rounded-full blur-2xl" />
      </motion.div>
    </main>
  );
}

export default function ComingSoonPage() {
  return (
    <Suspense fallback={
      <main className="flex flex-col min-h-dvh">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h1 className="text-2xl font-bold">Loading...</h1>
          </div>
        </div>
      </main>
    }>
      <ComingSoonContent />
    </Suspense>
  );
}