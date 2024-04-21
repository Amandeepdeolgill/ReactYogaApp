import Card from "../components/Card";
import "./Exercises.css";


export default function Exercises () {



    const cardInfo = [
        {
          move: 'Backward Bend',
          description: 'Bends the spine backward, lengthening the front of the body and expanding the chest.',
          url: 'https://source.unsplash.com/F2qh3yjz6Jk',
      },
      {
          move: 'Sun Salutation',
          description: 'A dynamic sequence of yoga poses that energises and improves flexibility. Enhances strength, circulation.',
          url: 'https://source.unsplash.com/UxkcSzRWM2s',
      },
      {
          move: 'Cat-Cow Stretch',
          description: 'A gentle flow between two poses to improve spine flexibility and mobility.',
          url: 'https://source.unsplash.com/xB4ExGcUai0',
      },
      {
          move: 'Sukhasana',
          description: 'It is a calming position that promotes relaxation, flexibility, and relieves tension in the body.',
          url: 'https://unsplash.com/photos/38BhHX0MC6M/download',
      },
      {
        move: 'Backward Bend',
        description: 'This exercise involves bending the spine backward, stretching the front of the body, and opening the chest.',
        url: 'https://source.unsplash.com/F2qh3yjz6Jk ',
    },
    {
        move: 'Sun Salutations',
        description: 'A dynamic sequence of yoga positions that energises the body and increases flexibility.',
        url: 'https://unsplash.com/photos/Jt08D6fLjqQ/download',
    },
    {
        move: 'Cat-Cow Stretch',
        description: 'A gentle transition between two positions that develops spinal flexibility and movement.',
        url: 'https://unsplash.com/photos/mIHbipd5-Qw/download',
    },
    {
        move: 'Seated Forward Fold',
        description: 'A relaxing stance that stretches the spine, hamstrings, and lower back.',
        url: 'https://unsplash.com/photos/wIlCHGJuihA/download',
    },
    {
        move: 'Seated Forward Fold',
        description: 'Promotes relaxation, flexibility, and relieves tension in the body..',
        url: 'https://unsplash.com/photos/GaprWyIw66o/download',
    },
    
    
    
      ];





    return (
        <div className="exercises">
            <h1>The Yoga Poses</h1>
        <Card cardInfo={cardInfo}></Card>
        </div>
    )
}