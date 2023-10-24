const championData = [
  {
    id: 1,
    championteam: "Argentina",
    imageurl:
      "https://www.geo.tv/assets/uploads/updates/2022-12-18/459472_8022822_updates.jpg",
    year: 2022,
  },
  {
    id: 2,
    championteam: "France",
    imageurl:
      "https://www.geo.tv/assets/uploads/updates/2022-12-18/459472_8022822_updates.jpg",
    year: 2018,
  },
  {
    id: 3,
    championteam: "Germany",
    imageurl:
      "https://img.bundesliga.com/tachyon/sites/2/2022/07/imago0016954029h-scaled.jpg?crop=0px%2C173px%2C2560px%2C1439px",
    year: 2014,
  },
  {
    id: 4,
    championteam: "Spain",
    imageurl:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/06/15/11/spain-2010-world-cup-final.jpg?width=1200",
    year: 2010,
  },
  {
    id: 5,
    championteam: "Italy",
    imageurl: "https://i.ytimg.com/vi/FcvJDKlF9_s/maxresdefault.jpg",
    year: 2006,
  },
  {
    id: 6,
    championteam: "Brazil",
    imageurl: "https://i.ytimg.com/vi/rCEDIo5srLk/maxresdefault.jpg",
    year: 2002,
  },
];
import "./App.css";
function App() {
  return (
    <>
      <h1>Champion</h1>
      <Champions></Champions>
    </>
  );
}

export default App;
function Champions() {
  return (
    <main>
      <div className="champions">
        {championData.map((team) => (
          <Champion team={team} key={team.id}></Champion>
        ))}
      </div>
    </main>
  );
}

function Champion({ team }) {
  return (
    <div className="champion">
      <h1>{team.year}</h1>
    </div>
  );
}
