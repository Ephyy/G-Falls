

export function formatDateTime(unixTimestamp: number) {
    const date = new Date(unixTimestamp * 1000);
  
    // Formato móvil: 1 Oct
    const optionsMobile: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' };
    const mobileFormat = date.toLocaleDateString('es-ES', optionsMobile);
  
    // Formato no móvil: 24 de Septiembre a las 12:30 hrs o 25 de Septiembre a las 23:59 hrs.
    const optionsNoMobile: Intl.DateTimeFormatOptions = { 
        day: 'numeric', 
        month: 'long', 
        hour: '2-digit', 
        minute: '2-digit' 
    };
    let noMobileFormat = date.toLocaleDateString('es-ES', optionsNoMobile).replace(',', ' a las');
    noMobileFormat += ' hrs.';
  
    // Formato Excel: 2024-10-01 12:30:01
    const excelFormat = date.toISOString().replace('T', ' ').split('.')[0];
  
    return {
      mobileFormat,
      noMobileFormat,
      excelFormat
    };
}