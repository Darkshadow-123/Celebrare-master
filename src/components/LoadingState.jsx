const LoadingState = () => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-500 border-t-transparent mx-auto mb-4"></div>
      <p className="text-gray-600 text-lg">Loading beautiful photos...</p>
    </div>
  </div>
);

export default LoadingState;
