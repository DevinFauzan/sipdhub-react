


import { CardLocation } from '../../../../partials/cards';

interface ILocationsItem {
  image: string;
  title: string;
  description: string;
}

interface ILocationsItems extends Array<ILocationsItem> {}

const Locations = () => {
  const items: ILocationsItems = [
    {
      image: '10.jpg',
      title: 'Total DPT',
      description: '205.499.206 Orang'
    },
    {
      image: '11.jpg',
      title: 'Pemilih Perempuan 2024',
      description: '101.841.448 Orang'
    },
    {
      image: '12.jpg',
      title: 'Pemilih laki-laki 2024',
      description: '101.388.865 Orang'
    },
   
  ];

  const renderItem = (item: ILocationsItem, index: number) => {
    return (
      <CardLocation
        key={index}
        image={item.image}
        title={item.title}
        description={item.description}
      />
    );
  };

  return (
    <div className="card h-[400px]">
      <div className="card-header items-center justify-center ">
        <h3 className="card-title">DPT</h3>
        {/* <button className="btn btn-success btn-sm">
          <KeenIcon icon="geolocation" /> Offer Location
        </button> */}
      </div>
      <div className="card-body p-5 lg:p-7.5 lg:pb-7 ">
        <div className="flex gap-10 scrollable-x items-center justify-center">
          {items.map((item, index) => {
            return renderItem(item, index);
          })}
        </div>
      </div>
    </div>
  );
};

export { Locations, type ILocationsItem, type ILocationsItems };
