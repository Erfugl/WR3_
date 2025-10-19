
import Header from './partials/header';
import Main from './partials/main';
import Footer from './partials/footer';
import useStateObject from './hooks/useStateObject';

export default function App() {
  const [fav, setFav] = useStateObject({
    favorite: "Brighten The Corners"
  })
  return (<>
    <Header />
    <Main context={{ fav, setFav }} />
    <Footer />
  </>
  );
};
