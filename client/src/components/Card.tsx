import { Spinner } from "all/assets/icons/Spinner";
interface PropTypes {
  header: string;
  context: string | number;
  border?: "border-r" | "border-t" | 'no-border';
  isLoading?: boolean;
}

export default function Card({ header, context, border, isLoading=false }: PropTypes) {
  const borderStyle = border == 'no-border' ? '' : border ? border : "border";
  return (
    <div className={`bg-gray-950 ${borderStyle} border-gray-700 rounded-xl p-8 hover:shadow-2xl hover:shadow-gray-900/50 transition-all duration-300 text-white group`}>
      <div className='flex items-center justify-between mb-4'>
        <h3 className='text-lg font-semibold text-gray-500'>{header}</h3>
      </div>
      <div className='text-3xl md:text-4xl font-bold text-white mb-2'>
        {
          isLoading ? <Spinner size="small" align="start" /> : context
        }
      </div>
    </div>
  );
}
