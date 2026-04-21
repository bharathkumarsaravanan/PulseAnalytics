interface PropTypes {
  header: string;
  context: string | number;
}

export default function Card({ header, context }: PropTypes) {
  return (
    <div className='bg-gray-950 border border-gray-700 rounded-xl p-8 hover:shadow-2xl hover:shadow-gray-900/50 transition-all duration-300 text-white group'>
      <div className='flex items-center justify-between mb-4'>
        <h3 className='text-lg font-semibold text-gray-500'>{header}</h3>
      </div>
      <div className='text-3xl md:text-4xl font-bold text-white mb-2'>
        {context}
      </div>
    </div>
  );
}
