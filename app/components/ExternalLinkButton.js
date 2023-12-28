// components/ExternalLinkButton.js
const ExternalLinkButton = () => {
    const externalLink = 'https://www.instagram.com/minam_78pak/';
    const externalLink1 = 'https://www.youtube.com/@minam2.0';
  
    return (
        <div>
      <div>
        <a href={externalLink} target="_blank" rel="noopener noreferrer">
          <button class>follow me</button>
        </a>
      </div>
      <div>
      <a href={externalLink1} target="_blank" rel="noopener noreferrer">
        <button>subscribe me</button>
      </a>
    </div>



    </div>
    );
  };
  
  export default ExternalLinkButton;
  