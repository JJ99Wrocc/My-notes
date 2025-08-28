# My Notes



**Krótki opis:**  
Prosta i intuicyjna aplikacja webowa do zapisywania krótkich notatek z wyborem kategorii takich jak „Zakupy”, „Praca”, „Treningi” i „Inne”. Wygodna forma szybkiej organizacji.

---

##  Live Demo  
Zobacz działającą wersję projektu:  
[**My Notes – Live Demo**]https://jj99wrocc.github.io/My-notes/

---

##  Funkcjonalności

- Formularz umożliwiający wpisanie notatki oraz wybór kategorii (Zakupy / Praca / Treningi / Inne).
- Intuicyjny interfejs: dwa przyciski „Zapisz” i „Anuluj” umożliwiają sterowanie akcją.
- Graficzne i stylistyczne oddzielenie formularza – czysty, minimalistyczny design.

---

##  Technologie

- **HTML5** – struktura formularza i strony.
- **CSS / SCSS** – stylizacja i układ responsywny.
- **JavaScript** – logika działania formularza (zapis, reset, ewentualna persystencja).
- (Jeśli używane) **LocalStorage** – przechowywanie notatek między sesjami.
- Aplikacja hostowana jako statyczna strona na **GitHub Pages**. :contentReference[oaicite:2]{index=2}

---

##  Uruchomienie lokalnie

Aplikacja działa bezpośrednio w przeglądarce — nie wymaga serwera ani instalacji:

```bash
git clone https://github.com/JJ99Wrocc/My-notes.git
cd My-notes
open index.html
Wystarczy otworzyć plik index.html w przeglądarce, by używać formularza.

Przykład użycia
Na stronie znajduje się formularz, gdzie użytkownik:

Wpisuje treść notatki.

Wybiera kategorię (np. „Zakupy” lub „Praca”).

Używa przycisku Zapisz do zatwierdzenia, lub Anuluj, aby skasować wpis.

Możliwości dalszego rozwoju
Zapis i przechowywanie notatek w localStorage, aby były dostępne po odświeżeniu strony.

Lista zapisanych notatek z możliwością edycji / usuwania.

Filtrowanie lub kolorowanie notatek po kategoriach.

Responsywność dla różnych urządzeń — mobilnych i desktopowych.

Eksport/import notatek (np. do pliku JSON lub PDF).

Badge GitHub – MIT Licencja, status projektu, użyte technologie.

Czego się nauczyłem
Praca z formularzami i wyborem kategorii w czystym JavaScript.

Stylizacja formularza w CSS / SCSS — UX i UI gotowe do dalszego rozwoju.

Hostowanie projektu jako statyczną stronę dzięki GitHub Pages.


Autor: Joachim Esangbedo
