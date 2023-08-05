type featureType = {
  icon: any;
  title: string;
  desc: string;
};

const FeatureTwo = ({ icon, title, desc }: featureType) => {
  return (
    <div className="feature-2">
      <div className="feature-icon">{icon}</div>
      <h4 className="title">{title}</h4>
      <p className="desc">{desc}</p>
    </div>
  );
};

export default FeatureTwo;
