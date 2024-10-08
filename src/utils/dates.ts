
// Ej:
// móvil: 1 Oct
// no móvil: 1 de octubre a las 12:30 hrs.
// Excel: 2024-10-01 12:30:01
export function formatDateTime(unixTimestamp: number, withHour: boolean = false) {
  const date = new Date(unixTimestamp * 1000);

  const optionsMobile: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' };
  let mobileFormat = date.toLocaleDateString('es-ES', optionsMobile);

  let noMobileFormat = '';
  let excelFormat = '';

  if (withHour) {
    const optionsNoMobileWithHour: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'long', 
      hour: '2-digit',
      minute: '2-digit'
    };
    noMobileFormat = date.toLocaleDateString('es-ES', optionsNoMobileWithHour).replace(',', ' a las');
    noMobileFormat += ' hrs.';

    excelFormat = date.toISOString().replace('T', ' ').split('.')[0];
  } else {
    const optionsNoMobile: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'long', 
    };
    noMobileFormat = date.toLocaleDateString('es-ES', optionsNoMobile)
    excelFormat = date.toISOString().split('T')[0];
  }
  
  mobileFormat = capitalizeMonth(mobileFormat);
  noMobileFormat = capitalizeMonth(noMobileFormat);

  return {
    mobileFormat,
    noMobileFormat,
    excelFormat
  }
};

// Capitalize the first letter of each month
function capitalizeMonth(dateString: string): string {
  return dateString.replace(/\b(de\s)?([a-záéíóúñ]+)/i, (match, p1, p2) => {
    if (p1) {
      return p1 + p2.charAt(0).toUpperCase() + p2.slice(1);
    }
    return p2.charAt(0).toUpperCase() + p2.slice(1);
  });
}