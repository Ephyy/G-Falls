import { formatDateTime } from '@/utils/dates.ts';

const Fecha = ({ timestamp, withHour = false, dataHrs = 1 }) => {
  const formattedDate = formatDateTime(timestamp, withHour);

  return (
    <span className="tiempo_rel" data-time={timestamp.toString()} data-hrs={dataHrs}>
      <span className="no-excel only-movil">
        {formattedDate.mobileFormat}
      </span>
      <span className="no-excel no-movil">
        {formattedDate.noMobileFormat}
      </span>
      <span className="only-excel">
        {formattedDate.excelFormat}
      </span>
    </span>
  );
};

export default Fecha;