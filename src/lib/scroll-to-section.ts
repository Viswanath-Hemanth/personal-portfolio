export function scrollToSection(id: string): void {
  const sectionElement = document.getElementById(id);
  if (!sectionElement) {
    return;
  }
  sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
}
