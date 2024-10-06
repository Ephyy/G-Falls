

export function formatDateTime(unixTimestamp: number, withHour: boolean = false) {
  const date = new Date(unixTimestamp * 1000);

  // Formato móvil: 1 Oct
  const optionsMobile: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' };
  const mobileFormat = date.toLocaleDateString('es-ES', optionsMobile);

  let noMobileFormat = '';
  let excelFormat = '';

  if (withHour) {
    const optionsNoMobileWithHour: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'long', 
      hour: '2-digit',
      minute: '2-digit'
    };
    noMobileFormat = date.toLocaleDateString('es-ES', optionsNoMobileWithHour)

    // Formato Excel: 2024-10-01 12:30:01
    excelFormat = date.toISOString().replace('T', ' ').split('.')[0];
  } else {
    const optionsNoMobile: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'long', 
    };
    noMobileFormat = date.toLocaleDateString('es-ES', optionsNoMobile)
    // Formato Excel: 2024-10-01
    excelFormat = date.toISOString().split('T')[0];
  }


  


  return {
    mobileFormat,
    noMobileFormat,
    excelFormat
  }
};
