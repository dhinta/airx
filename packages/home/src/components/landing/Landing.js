import { Banner } from '@airx/ui-toolkits';
const Landing = () => {
  const data = [
    {
      image: '/public/images/bg-1.jpg',
      content: {
        title: 'Ole baba le',
        body: 'some random description which makes no sense',
        alignment: 'left',
      },
    },
    {
      image: '/public/images/bg-2.jpg',
      content: {
        title: 'Ki hobe le',
        body: 'another nonsese subheading',
        alignment: 'left',
      },
    },
    {
      image: '/public/images/bg-3.jpg',
      content: {
        title: 'Professional title text',
        body: 'lorem ipsum dolor sit amet',
        alignment: 'left',
      },
    },
    {
      image: '/public/images/bg-4.jpg',
      content: {
        title: 'another title text',
        body: '',
        alignment: 'right',
      },
    },
  ];
  return (
    <div className="container-fluid">
      <Banner data={data} />
    </div>
  );
};

export default Landing;
