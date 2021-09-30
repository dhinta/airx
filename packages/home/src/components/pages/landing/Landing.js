import { Banner } from '@airx/ui-toolkits';
import News from '../../news/News';
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
      <div className="row">
        <div className="col-12 px-0">
          <Banner data={data} />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <News />
        </div>
      </div>
    </div>
  );
};

export default Landing;
