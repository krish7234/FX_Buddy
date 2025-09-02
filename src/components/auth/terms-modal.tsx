"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Terms and Conditions</DialogTitle>
        </DialogHeader>

        <ScrollArea className="h-96 pr-4">
          <div className="space-y-4 text-sm text-muted-foreground">
            <section>
              <h3 className="font-semibold text-card-foreground mb-2">1. Acceptance of Terms</h3>
              <p>
                By accessing and using FX Buddy, you accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-card-foreground mb-2">2. Risk Disclosure</h3>
              <p>
                Trading foreign exchange on margin carries a high level of risk and may not be suitable for all
                investors. The high degree of leverage can work against you as well as for you. Before deciding to trade
                foreign exchange you should carefully consider your investment objectives, level of experience, and risk
                appetite.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-card-foreground mb-2">3. Account Security</h3>
              <p>
                You are responsible for maintaining the confidentiality of your account and password and for restricting
                access to your computer. You agree to accept responsibility for all activities that occur under your
                account or password.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-card-foreground mb-2">4. Trading Rules</h3>
              <p>
                All trades must be executed in accordance with our trading rules and regulations. Market manipulation,
                scalping, and other prohibited trading practices are strictly forbidden and may result in account
                termination.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-card-foreground mb-2">5. Privacy Policy</h3>
              <p>
                We are committed to protecting your privacy. We will not sell, distribute, or lease your personal
                information to third parties unless we have your permission or are required by law to do so.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-card-foreground mb-2">6. Limitation of Liability</h3>
              <p>
                FX Buddy shall not be liable for any direct, indirect, incidental, special, or consequential damages
                resulting from the use or inability to use our services, even if we have been advised of the possibility
                of such damages.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-card-foreground mb-2">7. Modifications</h3>
              <p>
                FX Buddy reserves the right to modify these terms at any time. Users will be notified of any changes via
                email or through the platform. Continued use of the service after modifications constitutes acceptance
                of the new terms.
              </p>
            </section>
          </div>
        </ScrollArea>

        <div className="flex justify-end pt-4">
          <Button onClick={onClose} className="bg-accent hover:bg-accent/90">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
