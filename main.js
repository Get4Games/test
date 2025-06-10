        const quizData = [
            {
                questionText: '"Yüz bin yedi yüz yirmi beş" doğal sayısının rakamlarla yazılışı aşağıdakilerden hangisidir?',
                options: ["100725", "107250", "10725", "172500"],
                correctAnswerIndex: 0
            },
            {
                questionText: '8539 sayısındaki 8 rakamının basamak değeri ile 3 rakamının basamak değerinin farkı kaçtır?',
                options: ["7970", "797", "8030", "8509"],
                correctAnswerIndex: 0
            },
            {
                questionText: 'Binler basamağına yuvarlandığında 5000 olan en büyük dört basamaklı sayı ile en küçük dört basamaklı sayının farkı kaçtır?',
                options: ["999", "1000", "1999", "2000"],
                correctAnswerIndex: 0 // Corrected based on mathematical calculation (5499 - 4500 = 999)
            },
            {
                questionText: 'Aşağıdaki sayı örüntüsünde "?" yerine hangi sayı gelmelidir? <br> **12, 18, 24,?, 36, 42**',
                options: ["28", "30", "32", "34"],
                correctAnswerIndex: 1
            },
            {
                questionText: 'Bir çiftlikte 3450 koyun vardır. Keçilerin sayısı, koyunların sayısının 2 katından 150 eksiktir. İneklerin sayısı ise keçilerin sayısından 2000 fazladır. Bu çiftlikte toplam kaç hayvan vardır?',
                options: ["15150", "15250", "15350", "18950"],
                correctAnswerIndex: 3
            },
            {
                questionText: 'Bir fırıncı günde 345 ekmek üretmektedir. Bir haftada (7 gün) kaç ekmek üretir?',
                options: ["2.415", "2.315", "2.215", "2.115"],
                correctAnswerIndex: 0
            },
            {
                questionText: 'Bir okul gezisine katılacak 180 öğrenci, her otobüse 30 öğrenci binecek şekilde otobüslere dağıtılacaktır. Kaç otobüse ihtiyaç vardır?',
                options: ["5", "6", "7", "8"],
                correctAnswerIndex: 1
            },
            {
                questionText: 'Bir manavın tahmini 12 kasa elmanın her birinde 15 kg elma olduğudur. Gerçekte her kasada 13 kg elma varsa ve elmanın kilogram fiyatı 8 TL ise, manavın tahmini satış geliri ile gerçek satış geliri arasındaki fark kaç TL\'dir?',
                options: ["192", "204", "216", "240"],
                correctAnswerIndex: 0
            },
            {
                questionText: 'Bir markette 450 litre süt bulunmaktadır. Sütün önce 1/3\'ü, sonra kalan sütün 1/2\'si satılıyor. Geriye kaç litre süt kalmıştır?',
                options: ["100", "150", "200", "250"],
                correctAnswerIndex: 1
            },
            {
                questionText: 'Bir otobüste 48 yolcu vardır. Yolcuların 3/8\'i erkek, kalanların 1/3\'ü çocuktur. Geriye kalan yolcuların sayısı kaçtır?',
                options: ["18", "20", "22", "24"],
                correctAnswerIndex: 1
            },
            {
                questionText: 'Bir pastanın 3/8\'ini Ali, 2/8\'ini Ayşe yemiştir. Pastanın ne kadarı yenmiştir?',
                options: ["1/8", "3/8", "5/8", "7/8"],
                correctAnswerIndex: 2
            },
            {
                questionText: 'Bir bahçenin 3/5\'i çiçeklerle, kalan alanın 1/4\'ü sebzelerle ekilmiştir. Bahçenin geriye kalan kısmı ise çim alandır. Bahçenin kaçta kaçı çim alandır?',
                options: ["1/20", "3/20", "6/20", "9/20"],
                correctAnswerIndex: 2
            },
            {
                questionText: 'Aşağıdaki geometrik şekillerden hangisinin tüm kenar uzunlukları birbirine eşittir?',
                options: ["Dikdörtgen", "Üçgen", "Kare", "Çember"],
                correctAnswerIndex: 2
            },
            {
                questionText: 'Bir kenar uzunluğu 8 cm olan bir karenin çevresi kaç cm\'dir?',
                options: ["16", "24", "32", "64"],
                correctAnswerIndex: 2
            },
            {
                questionText: 'Aşağıdaki açılardan hangisi dik açıya örnektir?',
                options: ["45°", "90°", "120°", "180°"],
                correctAnswerIndex: 1
            },
            {
                questionText: 'Bir dikdörtgenin uzun kenarı 10 cm, kısa kenarı 6 cm\'dir. Bu dikdörtgenin alanı kaç cm²\'dir?',
                options: ["16", "32", "60", "100"],
                correctAnswerIndex: 2
            },
            {
                questionText: 'Bir manav, 5 kg 250 gram çilek aldı. Çileğin 1 kg 800 gramını sattı. Geriye kaç gram çilek kaldı?',
                options: ["3450 g", "3550 g", "4050 g", "4450 g"],
                correctAnswerIndex: 0
            },
            {
                questionText: 'Bir terzi 3 metre 40 cm uzunluğundaki bir kumaşın önce 1 metre 20 cm\'sini, sonra kalan kumaşın yarısını kullandı. Terzinin elinde kaç cm kumaş kalmıştır?',
                options: ["110 cm", "120 cm", "220 cm", "340 cm"],
                correctAnswerIndex: 0
            },
            {
                questionText: 'Bir öğrenci, bir hafta boyunca her gün okuduğu sayfa sayılarını not almıştır: Pazartesi 15, Salı 20, Çarşamba 10, Perşembe 25, Cuma 18, Cumartesi 30, Pazar 22. Bu öğrencinin bir günde ortalama kaç sayfa okuduğunu gösteren bir veri tablosu oluşturmak için hangi bilgiyi kullanmalıyız?',
                options: ["En az okuduğu gün sayısı", "En çok okuduğu gün sayısı", "Toplam okuduğu sayfa sayısı ve gün sayısı", "Sadece hafta içi okuduğu sayfa sayısı"],
                correctAnswerIndex: 2
            },
            {
                questionText: 'Bir markette satılan meyvelerin kilogram fiyatları aşağıdaki gibidir:<br>🍎 Elma: 12 TL/kg<br>🍌 Muz: 18 TL/kg<br>🍊 Portakal: 10 TL/kg<br>Bir müşteri 2 kg 🍎, 1 kg 🍌 ve 3 kg 🍊 alırsa toplam kaç TL öder?',
                options: ["52", "60", "72", "80"],
                correctAnswerIndex: 2
            }
        ];

        let currentQuestionIndex = 0;
        let score = 0;
        let lives = 5;
        let shuffledQuestions = [];

        // DOM Elementleri
        const quizApp = document.getElementById('quizApp');
        const startScreen = document.getElementById('startScreen');
        const quizScreen = document.getElementById('quizScreen');
        const resultScreen = document.getElementById('resultScreen');
        const startButton = document.getElementById('startButton');
        const questionNumberSpan = document.getElementById('questionNumber');
        const questionTextElement = document.getElementById('questionText');
        const optionsGrid = document.getElementById('optionsGrid');
        const feedbackMessage = document.getElementById('feedbackMessage');
        const livesDisplay = document.getElementById('livesDisplay');
        const scoreDisplay = document.getElementById('scoreDisplay');
        const finalScoreDisplay = document.getElementById('finalScoreDisplay');
        const resultTitle = document.getElementById('resultTitle');
        const finalMessage = document.getElementById('finalMessage');
        const restartButton = document.getElementById('restartButton');
        const explanationButton = document.getElementById('explanationButton'); // Yeni
        const explanationOutput = document.getElementById('explanationOutput'); // Yeni

        // Canları güncelleyen fonksiyon
        function updateLivesDisplay() {
            livesDisplay.innerHTML = ''; // Mevcut kalpleri temizle
            for (let i = 0; i < 5; i++) {
                const heart = document.createElement('span');
                heart.innerHTML = '❤️'; // Kalp emojisi
                if (i >= lives) {
                    heart.classList.add('lost-heart'); // Kaybedilen kalpler için stil
                }
                livesDisplay.appendChild(heart);
            }
        }

        // Quiz'i başlatma fonksiyonu
        function startGame() {
            currentQuestionIndex = 0;
            score = 0;
            lives = 5;
            shuffledQuestions = [...quizData].sort(() => Math.random() - 0.5); // Soruları karıştır
            
            startScreen.classList.add('hidden');
            resultScreen.classList.add('hidden'); // Sonuç ekranını gizle
            quizScreen.classList.remove('hidden');
            quizApp.classList.remove('hidden'); // Quiz uygulamasını göster
            quizApp.style.opacity = 1; // Fade-in animasyonu için
            quizApp.style.transform = 'translateY(0)';

            updateLivesDisplay();
            scoreDisplay.textContent = score;
            showQuestion();
        }

        // Soruyu gösterme fonksiyonu
        function showQuestion() {
            feedbackMessage.textContent = '';
            optionsGrid.innerHTML = ''; // Seçenekleri temizle
            explanationButton.classList.add('hidden'); // Açıklama butonunu gizle
            explanationOutput.classList.add('hidden'); // Açıklama çıktısını gizle
            explanationOutput.textContent = ''; // Açıklama çıktısını temizle

            const question = shuffledQuestions[currentQuestionIndex];
            questionNumberSpan.textContent = currentQuestionIndex + 1;
            questionTextElement.innerHTML = question.questionText; // innerHTML kullanıldı çünkü soru metinlerinde <br> var

            question.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.classList.add('option-button');
                button.textContent = String.fromCharCode(65 + index) + ") " + option; // A), B), C), D) ekle
                button.dataset.index = index;
                button.addEventListener('click', handleAnswerClick);
                optionsGrid.appendChild(button);
            });
            enableOptions();
        }

        // Seçenekleri etkinleştirme
        function enableOptions() {
            const buttons = optionsGrid.querySelectorAll('.option-button');
            buttons.forEach(button => {
                button.classList.remove('disabled', 'correct', 'incorrect');
                button.disabled = false;
            });
            explanationButton.disabled = false; // Açıklama butonu etkin
            explanationButton.classList.remove('loading');
        }

        // Seçenekleri devre dışı bırakma
        function disableOptions() {
            const buttons = optionsGrid.querySelectorAll('.option-button');
            buttons.forEach(button => {
                button.classList.add('disabled');
                button.disabled = true;
            });
            explanationButton.disabled = true; // Açıklama butonu devre dışı
        }

        // Cevabı kontrol etme
        function handleAnswerClick(event) {
            disableOptions(); // Seçenekleri devre dışı bırak

            const selectedOptionIndex = parseInt(event.target.dataset.index);
            const question = shuffledQuestions[currentQuestionIndex];
            const correctOptionButton = optionsGrid.children[question.correctAnswerIndex];

            if (selectedOptionIndex === question.correctAnswerIndex) {
                event.target.classList.add('correct');
                feedbackMessage.textContent = 'Doğru! 🎉';
                score++;
            } else {
                event.target.classList.add('incorrect');
                correctOptionButton.classList.add('correct'); // Doğru cevabı göster
                feedbackMessage.textContent = 'Yanlış! Canınız gitti. 😔';
                lives--;
            }

            updateLivesDisplay();
            scoreDisplay.textContent = score;

            // Cevap verildikten sonra açıklama butonunu göster
            explanationButton.classList.remove('hidden');

            // Otomatik sonraki soruya geçiş veya sonuç ekranına geçiş
            setTimeout(() => {
                // Sadece açıklama butonu aktif değilse (yani kullanıcı açıklama istememişse) bir sonraki soruya geç
                if (!explanationButton.classList.contains('loading')) {
                    if (lives <= 0 || currentQuestionIndex === shuffledQuestions.length - 1) {
                        showResults();
                    } else {
                        moveToNextQuestion();
                    }
                }
            }, 1500); // 1.5 saniye sonra otomatik geçiş
        }

        // LLM'den açıklama isteme fonksiyonu
        async function requestExplanation() {
            const question = shuffledQuestions[currentQuestionIndex];
            const correctOptionText = question.options[question.correctAnswerIndex];
            const correctOptionLetter = String.fromCharCode(65 + question.correctAnswerIndex);

            explanationOutput.classList.remove('hidden');
            explanationOutput.innerHTML = '<div class="loader"></div> Açıklama yükleniyor...';
            explanationButton.classList.add('loading');
            explanationButton.disabled = true;

            const prompt = `Aşağıdaki 4. sınıf matematik sorusunu, cevap seçenekleriyle birlikte açıklayabilir misin? Doğru cevabın neden doğru olduğunu ve diğer cevapların neden yanlış olduğunu basit ve anlaşılır bir dille, 4. sınıf öğrencisinin anlayacağı şekilde anlat. Eğer soru matematiksel bir hesaplama gerektiriyorsa, adımları açıklayarak göster.

Soru: "${question.questionText.replace(/<br>/g, '')}"
Seçenekler: ${question.options.map((opt, idx) => `${String.fromCharCode(65 + idx)}) ${opt}`).join(', ')}
Doğru cevap: ${correctOptionLetter}) ${correctOptionText}`;

            try {
                let chatHistory = [];
                chatHistory.push({ role: "user", parts: [{ text: prompt }] });
                const payload = { contents: chatHistory };
                const apiKey = ""; 
                const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
                
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                
                const result = await response.json();

                if (result.candidates && result.candidates.length > 0 &&
                    result.candidates[0].content && result.candidates[0].content.parts &&
                    result.candidates[0].content.parts.length > 0) {
                    const text = result.candidates[0].content.parts[0].text;
                    explanationOutput.textContent = text;
                } else {
                    explanationOutput.textContent = 'Açıklama alınamadı. Lütfen tekrar deneyin.';
                }
            } catch (error) {
                console.error('Gemini API hatası:', error);
                explanationOutput.textContent = 'Bir hata oluştu, açıklama yüklenemedi.';
            } finally {
                explanationButton.classList.remove('loading');
                explanationButton.disabled = false; // Açıklama yüklendikten sonra tekrar etkinleştir
            }
        }


        // Sonraki soruya geçme fonksiyonu
        function moveToNextQuestion() {
            currentQuestionIndex++;
            showQuestion(); // Sonraki soruyu göster
        }

        // Sonuç ekranını gösterme
        function showResults() {
            quizScreen.classList.add('hidden');
            resultScreen.classList.remove('hidden');

            finalScoreDisplay.textContent = score;
            if (lives <= 0) {
                resultTitle.textContent = 'Oyun Bitti! Canınız Kalmadı 💔';
                finalMessage.textContent = `Toplam ${score} doğru cevap verdin. Tekrar denemek ister misin?`;
            } else {
                resultTitle.textContent = 'Tebrikler! Sınavı Bitirdin 🎉';
                finalMessage.textContent = `Toplam ${score} doğru cevap verdin ve ${lives} canın kaldı. Harikasın!`;
            }
        }

        // Event Listener'lar
        startButton.addEventListener('click', startGame);
        restartButton.addEventListener('click', startGame);
        explanationButton.addEventListener('click', requestExplanation); // Yeni event listener

        // Uygulama yüklendiğinde başlat ekranını göster
        document.addEventListener('DOMContentLoaded', () => {
            quizApp.classList.remove('hidden'); // Ana container'ı göster
        });

        // Mobil cihazlar için arka plan resmi fallback'i (tahta dokusu)
        const setBackgroundImage = () => {
            const body = document.body;
            // Placeholders for blackboard texture (not actual images)
            if (window.innerWidth <= 768) {
                body.style.backgroundImage = "url('https://placehold.co/700x1000/2c3e50/D2D7D3?text=Okul%20Tahtası%20Arka%20Plan')";
            } else {
                body.style.backgroundImage = "url('https://placehold.co/1000x800/2c3e50/D2D7D3?text=Okul%20Tahtası%20Arka%20Plan')";
            }
        };

        window.addEventListener('resize', setBackgroundImage);
        setBackgroundImage(); // İlk yüklemede ayarla
