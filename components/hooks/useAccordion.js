import { useEffect } from "react";

export function useAccordion() {
  useEffect(() => {
    if (typeof document !== "undefined") {
      const accordionItems = document.querySelectorAll(".accordion > .accordion-item");

      const activePanels = document.querySelectorAll(".accordion > .accordion-item.is-active .accordion-panel");

      activePanels.forEach((panel) => {
        panel.style.display = "block";
        panel.style.maxHeight = panel.scrollHeight + "px";
      });

      accordionItems.forEach((item) => {
        item.addEventListener("click", function () {
          const siblings = Array.from(this.parentNode.children).filter((child) => child !== this);

          siblings.forEach((sibling) => {
            sibling.classList.remove("is-active");
            const siblingPanel = sibling.querySelector(".accordion-panel");
            if (siblingPanel) {
              siblingPanel.style.maxHeight = null;
              siblingPanel.style.display = "none";
            }
          });

          this.classList.toggle("is-active");
          const panel = this.querySelector(".accordion-panel");
          if (panel) {
            if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
              panel.style.display = "none";
            } else {
              panel.style.display = "block";
              panel.style.maxHeight = panel.scrollHeight + "px";
            }
          }
        });
      });

      // Cleanup event listeners when the component unmounts
      return () => {
        accordionItems.forEach((item) => {
          item.replaceWith(item.cloneNode(true));
        });
      };
    }
  }, []);
}
