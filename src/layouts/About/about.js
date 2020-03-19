import React from "react";
import './styleAbout.scss'
import violetWater from './../../pictures/violetwater.jpeg';

const About = () => {
    return (
        <main className={'about'}>
            <div>
                <h1>VV<span>app</span></h1>
                <p>czyli <strong>Vendor Validation app</strong> to aplikacja
                    pomagająca Tobie i Twojej firmie, w łatwy i przyjemny sposób
                    sprawdzać kontrahentów.</p>
                <p>Dzięki <strong>Vendor Validation app</strong> w ciągu kilku sekund otrzymasz
                    niezbędne informacje. Mnogość opcji i .....Donut topping pie ice
                    cream chocolate bar. Halvah biscuit candy canes dragée croissant
                    marshmallow tart apple pie brownie. Oat cake apple pie gummi bears
                    bear claw cotton candy fruitcake. Lemon drops dragée gummies wafer
                    candy. Icing macaroon dragée wafer halvah powder. Ice cream chocolate
                    cake lollipop chocolate cake sweet roll carrot cake jujubes pudding.
                    Sugar plum carrot cake marzipan biscuit. Bonbon jelly sweet.
                    Lemon drops tart cheesecake lollipop bonbon chocolate cake jelly
                    beans chocolate halvah. Muffin brownie jelly beans halvah marshmallow
                    toffee dessert. Icing liquorice cake soufflé muffin chocolate bar.
                    Oat cake gingerbread donut croissant apple pie.</p>
                    <p>Candy canes cake halvah jelly beans marshmallow. Chocolate bar
                    cheesecake pie donut pudding marshmallow chocolate bar. Tart gummi
                    bears cake gingerbread. Oat cake chupa chups dessert dragée. Ice cream
                    candy canes candy canes. Bear claw pudding soufflé. Marshmallow sesame
                    snaps sugar plum oat cake jelly beans wafer donut sweet. Lollipop sweet
                    roll chupa chups chocolate cake tiramisu dragée danish danish marzipan.
                    Dessert tootsie roll bonbon jujubes halvah dessert. Cake icing liquorice
                    gummi bears brownie chocolate candy canes chocolate bar soufflé. Macaroon
                    croissant tiramisu chocolate cake wafer apple pie marzipan sweet roll. Topping
                    toffee marzipan lemon drops jelly-o.</p>
                <img src={violetWater} alt={"Purple water"}/>
            </div>
        </main>

    )
};

export default About;