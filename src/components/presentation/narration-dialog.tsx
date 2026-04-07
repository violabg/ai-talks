"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useNarrationContext } from "./narration-provider";

export function NarrationDialog() {
  const { showInitialDialog, handleInitialChoice } = useNarrationContext();

  return (
    <Dialog open={showInitialDialog} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Narrazione Vocale</DialogTitle>
          <DialogDescription>
            Desideri attivare la narrazione vocale per questa presentazione?
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-3 justify-end mt-6">
          <Button
            variant="outline"
            onClick={() => handleInitialChoice(false)}
          >
            No, grazie
          </Button>
          <Button
            onClick={() => handleInitialChoice(true)}
          >
            Sì, attiva
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
