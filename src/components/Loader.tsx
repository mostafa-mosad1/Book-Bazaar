import PacmanLoader from './../../node_modules/react-spinners/esm/PacmanLoader';
function Loader() {
  return (
    <>
    <div className="mx-auto w-full flex justify-center items-center">
    <PacmanLoader
  color="#CC9600"
  size={50}
/>
    </div>
    </>
  );
}

export default Loader;
