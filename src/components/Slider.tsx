import '../styles/Slider.scss';
import '../styles/utils/utils.scss';

const slides = [
  {
    label: 'JavaScript',
    icon: 'javascript.svg',
  },
  {
    label: 'Angular',
    icon: 'angular.svg',
  },
  {
    label: 'Node',
    icon: 'nodejs.svg',
  },
  {
    label: 'React',
    icon: 'react.svg',
  },
  {
    label: 'Ionic',
    icon: 'ionic.svg',
  },
  {
    label: 'TypeScript',
    icon: 'typescript.svg',
  },
  {
    label: 'RxJS',
    icon: 'rxjs.svg',
    className: 'to-white',
  },
  {
    label: 'Redux',
    icon: 'redux.svg',
  },
  {
    label: 'MongoDB',
    icon: 'javascript.svg',
  },
  {
    label: 'HTML5',
    icon: 'html5.svg',
  },
  {
    label: 'CSS3',
    icon: 'css3.svg',
  },
  {
    label: 'Sass',
    icon: 'sass.svg',
  },
  {
    label: 'Flutter',
    icon: 'flutter.svg',
  },
  {
    label: 'Phaser',
    icon: 'javascript.svg',
  },
  {
    label: 'AWS',
    icon: 'aws.svg',
  },
];

export default function Slider() {
  return (
    <div className="slider flex ai-c">
      <div className="slide-track">
        {slides.map((slide, index) => {
          return (
            <div key={index} className="slide">
              <div className="flex jc-c ai-c">
                <img
                  className={slide.className}
                  width={20}
                  src={'./assets/icons/slider/' + slide.icon}
                  alt=""
                />
                <span
                  style={{
                    fontSize: '16px',
                    marginLeft: '10px',
                  }}
                >
                  {slide?.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
