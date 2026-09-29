export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      A quote I live by:
      <br />
      <img
        id="wd-your-image"
        src="/images/persistence.jpg"
        width="300px"
        alt="Press On! persistence quote by Calvin Coolidge"
      />
      <br />
      <img
        id="wd-ai-image"
        src="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
        width="200px"
        alt="Earth seen from Apollo 17"
      />
    </div>
  );
}
