type featureType = {
  icon: any;
  title: string;
  desc: string;
};

const Feature = ({ icon, title, desc }: featureType) => {
  return (
    <div className="feature group hover:border-primary">
      <span className="feature-icon group-hover:bg-primary group-hover:text-white">
        {icon}
      </span>
      <h4>{title}</h4>
      <div className="desc">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Feature;
