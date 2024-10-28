
// Ej:
// móvil: 1 Oct
// no móvil: 1 de octubre a las 12:30 hrs.
// Excel: 2024-10-01 12:30:01import { format } from 'date-fns';
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

const timeZone = 'America/Santiago';

export function formatDateTime(unixTimestamp: number, withHour: boolean = false) {
  const date = toZonedTime(new Date(unixTimestamp * 1000), timeZone);

  const optionsMobile: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' };
  let mobileFormat = date.toLocaleDateString('es-ES', optionsMobile);

  let noMobileFormat = '';
  let excelFormat = '';

  if (withHour) {
    const optionsNoMobileWithHour: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'long', 
      hour: '2-digit',
      minute: '2-digit',
      hour12: false // Asegura el formato 24 horas
    };
    noMobileFormat = date.toLocaleDateString('es-ES', optionsNoMobileWithHour).replace(',', ' a las');
    noMobileFormat += ' hrs.';

    excelFormat = format(date, 'yyyy-MM-dd HH:mm:ss'); // Formato consistente para Excel
  } else {
    const optionsNoMobile: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'long', 
    };
    noMobileFormat = date.toLocaleDateString('es-ES', optionsNoMobile);
    excelFormat = format(date, 'yyyy-MM-dd');
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
