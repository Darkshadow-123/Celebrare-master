import { memo } from 'react';

// React.memo skips this component when value and onChange are unchanged.
const SearchBar = memo(({ value, onChange }) => (
  <div className="relative mx-auto mb-4 max-w-2xl">
    <svg className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
    <input
      className="w-full rounded-2xl border border-white/50 bg-white/80 py-4 pl-12 pr-4 text-lg shadow-lg shadow-purple-100/50 backdrop-blur-sm transition-all duration-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400"
      type="text"
      placeholder="Search by author name..."
      value={value}
      onChange={onChange}
    />
  </div>
));

export default SearchBar;
