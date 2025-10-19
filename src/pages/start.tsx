import { useOutletContext } from "react-router-dom";

StartPage.route = {
  path: '/',
  menuLabel: 'Start',
  index: 1
};

export default function StartPage() {

  const { fav, setFav } = useOutletContext<any>();

  return <>
    <h1>Cool Record Collection</h1>
    <h3>Would you like to select a favorite record?</h3>
    <label>
      Favorite Record:
      <select
        value={fav.favorite}
        onChange={(e) => setFav("favorite", e.target.value)}
      >
        <option value="Brighten The Corners">Brighten The Corners</option>
        <option value="London Calling">London Calling</option>
        <option value="The Stooges">The Stooges</option>
        <option value="Animorphs">Animorphs</option>
      </select>
    </label>
  </>;
};