import React from "react";
import './styleHowToUse.scss'
import widecity from './../../pictures/widecity.jpeg';

const HowToUse = () => {
    return (
        <main className={'howToUse'}>
            <div>
                <h1>Tutaj dowiesz się jak używać aplikacji <strong>Vendors Validation app</strong></h1>
                <p>W zakładce Szukaj, znajdują się przyciski, które są przypisane do danego typu
                    wyszukiwania. Aplikacja umożliwia 2 metody zapytań: <q>pełne</q>
                    oraz <q>uproszczone</q>.</p>
                <p>Aby skorzystać z metody <q>pełnej</q>, wybierz jeden z parametrów:
                    NIP, REGON lub numer rachunku bankowego oraz dzień, na jaki mają być
                    wyświetlone informacje o podmiocie i uzyskasz:
                    cały zakres danych z wykazu o podmiotach, o które pytasz,
                    unikalny identyfikator – klucz elektroniczny, który jest
                    potwierdzeniem wykonania zapytania (o jaki identyfikator
                    podmiotu pytano, datę na jaki dzień została udzielona odpowiedź
                    i datę zapytania);</p>
                <p>Metodę uproszczoną <q>check</q>, która poprzez API skrócone będzie łączyła cię
                    z wykazem po wprowadzeniu parametrów zapytania: NIP lub REGON,
                    numer rachunk oraz daty na jaki dzień ma być udzielona odpowiedź.
                    W odpowiedzi aplikacja zwróci następujące informacje:
                    TAK lub NIE – informacje, które oznaczają, że dany rachunek przypisany
                    jest (lub nie jest) do wyspecyfikowanego numeru podmiotu (w dniu DATA),
                    elektroniczny klucz, który potwierdza wykonanie zapytania
                    (o jaki identyfikator podmiotu pytano, datę na jaki dzień
                    została udzielona odpowiedź i datę składania zapytania).</p>
                <img src={widecity} alt={"Violet hands"}/>
                <div>
                    <h2>Kody i komunikaty możliwych błędów</h2>
                    <ul>
                        <li>WL-100 Wystąpił nieoczekiwany błąd serwera.</li>
                        <li>WL-101 Pole 'data' nie może być puste.</li>
                        <li>WL-102 Pole 'data' ma nieprawidłowy format.</li>
                        <li>WL-103 Data nie może być datą przyszłą.</li>
                        <li>WL-104 Pole 'REGON' nie może być puste.</li>
                        <li>WL-105 Pole 'REGON' ma nieprawidłową długość. Wymagane 9 lub 14 znaków (nr).</li>
                        <li>WL-106 Pole 'REGON' zawiera niedozwolone znaki. Wymagane tylko cyfry (nr).</li>
                        <li>WL-107 Nieprawidłowy REGON (nr).</li>
                        <li>WL-108 Pole 'numer konta' nie może być puste.</li>
                        <li>WL-109 Pole 'numer konta' ma nieprawidłową długość. Wymagane 26 znaków (nr).</li>
                        <li>WL-110 Pole 'numer konta' zawiera niedozwolone znaki. Wymagane tylko cyfry (nr).</li>
                        <li>WL-111 Nieprawidłowy numer konta bankowego (nr).</li>
                        <li>WL-112 Pole 'NIP' nie może być puste.</li>
                        <li>WL-113 Pole 'NIP' ma nieprawidłową długość. Wymagane 10 znaków (nr).</li>
                        <li>WL-114 Pole 'NIP' zawiera niedozwolone znaki. Wymagane tylko cyfry (nr).</li>
                        <li>WL-115 Nieprawidłowy NIP (nr).</li>
                        <li>WL-116 Pole 'nazwa podmiotu' nie może być puste.</li>
                        <li>WL-117 Pole 'nazwa podmiotu' za krótkie. Wymagane przynajmniej 5 znaków.</li>
                        <li>WL-118 Data sprzed zakresu rejestru.</li>
                        <li>WL-130 Przekroczono maksymalna liczbę argumentów zapytania.</li>
                        <li>WL-190 Niepoprawne żądanie.</li>
                        <li>WL-191 Limit żądań dla tego adresu IP został na dziś wyczerpany.</li>
                        <li>WL-195 Zaktualizowaliśmy bazę danych. Wykonaj ponownie zapytanie, aby otrzymać aktualne
                            dane.
                        </li>
                        <li>WL-196 Trwa aktualizacja bazy danych. Spróbuj ponownie później.</li>
                    </ul>
                </div>
            </div>
        </main>
    )
};

export default HowToUse;