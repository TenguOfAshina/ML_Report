// This script can be used to dynamically update the code snippet content
// For example, you can use AJAX to fetch code from a server and update the content

// Example: Update the code snippet content
const codeSnippet1 = document.getElementById('codeSnippet1');
codeSnippet1.textContent = `Output >>>

3/3 [==============================] - 0s 16ms/step
[48,
 14,
 7,
 45,
 50,
 49,
 26,
 4,
 36,
 47,
 21,
 27,
 15,
 26,
 7,
 27,
 39,
 13,
 30,
 13,
 15,
 38,
 0,
 12,
 12,
 40,
 19,
 9,
 17,
 3,
 42,
 45,
 49,
 30,
 9,
 39,
 51,
 39,
 10,
 25,
 19,
 12,
 5,
 6,
 10,
 15,
 36,
 16,
 23,
 33,
 6,
 17,
 43,
 21,
 17,
 46,
 48,
 19,
 50,
 50,
 0,
 37,
 30,
 14,
 33,
 27,
 6,
 45,
 26,
 49,
 29,
 3,
 25,
 22,
 22,
 50,
 32,
 46,
 11,
 32,
 42,
 18,
 14,
 24,
 41,
 6,
 52,
 23,
 32,
 10,
 31,
 34,
 5,
 31,
 2,
 41,
 31,
 26,
 3,
 22,
 3,
 19,
 2,
 24,
 8,
 5,
 15,
 44,
 21,
 1,
 13,
 5,
 47,
 36,
 50,
 29,
 4,
 18,
 45,
 47,
 38,
 49,
 11,
 1,
 42,
 46,
 30,
 52,
 5,
 9,
 7,
 22,
 40,
 13,
 44,
 5,
 1,
 3,
 23,
 12,
 7,
 37,
 24,
 5,
 28,
 44,
 24,
 36,
 14,
 38,
 23,
 16,
 33,
 32,
 8,
 19,
 29,
 31,
 36,
 49,
 7,
 3,
 18,
 44,
 37,
 0,
 35,
 43,
 24,
 11,
 21,
 11,
 4,
 41,
 0,
 4,
 39,
 40,
 21,
 25,
 3,
 15,
 44,
 3,
 2,
 34,
 29,
 43,
 3,
 21,
 51,
 11,
 4,
 51,
 12,
 39,
 14,
 10,
 49,
 35,
 39,
 0,
 29,
 38,
 22,
 32,
 41,
 9,
 13,
 27,
 22,
 12,
 19,
 48,
 31,
 36,
 51,
 46,
 23,
 41,
 29,
 3,
 16,
 30,
 30,
 2,
 23,
 34,
 19,
 7,
 38,
 32,
 33,
 44,
 47,
 18,
 41,
 49,
 52,
 46,
 47,
 37,
 0,
 32,
 35,
 35,
 14,
 42,
 0,
 40,
 2,
 30,
 1,
 40,
 34,
 26,
 24,
 38,
 19,
 32,
 8,
 37,
 4,
 6,
 35]
`;

const codeSnippet2 = document.getElementById('codeSnippet2');
codeSnippet2.textContent = `Epoch 1/200
60/60 [==============================] - 10s 77ms/step - loss: 3.9274 - accuracy: 0.0243 - val_loss: 3.7611 - val_accuracy: 0.0226
Epoch 2/200
60/60 [==============================] - 3s 47ms/step - loss: 3.7352 - accuracy: 0.0378 - val_loss: 3.5786 - val_accuracy: 0.0264
Epoch 3/200
60/60 [==============================] - 3s 46ms/step - loss: 3.5280 - accuracy: 0.0500 - val_loss: 3.1190 - val_accuracy: 0.0679
Epoch 4/200
60/60 [==============================] - 3s 46ms/step - loss: 3.2102 - accuracy: 0.0956 - val_loss: 2.8745 - val_accuracy: 0.1245
Epoch 5/200
60/60 [==============================] - 3s 48ms/step - loss: 2.9326 - accuracy: 0.1359 - val_loss: 2.5675 - val_accuracy: 0.1925
Epoch 6/200
60/60 [==============================] - 3s 50ms/step - loss: 2.6877 - accuracy: 0.1861 - val_loss: 2.2142 - val_accuracy: 0.2604
Epoch 7/200
60/60 [==============================] - 3s 50ms/step - loss: 2.5169 - accuracy: 0.2151 - val_loss: 2.0615 - val_accuracy: 0.2906
Epoch 8/200
60/60 [==============================] - 3s 50ms/step - loss: 2.4051 - accuracy: 0.2449 - val_loss: 1.8676 - val_accuracy: 0.3208
Epoch 9/200
60/60 [==============================] - 3s 48ms/step - loss: 2.3132 - accuracy: 0.2551 - val_loss: 1.8406 - val_accuracy: 0.3434
Epoch 10/200
60/60 [==============================] - 3s 49ms/step - loss: 2.2365 - accuracy: 0.2744 - val_loss: 1.7861 - val_accuracy: 0.3547
Epoch 11/200
60/60 [==============================] - 3s 46ms/step - loss: 2.1649 - accuracy: 0.2892 - val_loss: 1.8199 - val_accuracy: 0.3585
Epoch 12/200
60/60 [==============================] - 3s 47ms/step - loss: 2.1132 - accuracy: 0.3060 - val_loss: 1.6744 - val_accuracy: 0.3585
Epoch 13/200
60/60 [==============================] - 3s 49ms/step - loss: 2.0487 - accuracy: 0.3186 - val_loss: 1.6835 - val_accuracy: 0.3509
Epoch 14/200
60/60 [==============================] - 3s 48ms/step - loss: 2.0176 - accuracy: 0.3291 - val_loss: 1.7016 - val_accuracy: 0.3774
Epoch 15/200
60/60 [==============================] - 3s 47ms/step - loss: 1.9911 - accuracy: 0.3496 - val_loss: 1.6438 - val_accuracy: 0.4000
Epoch 16/200
60/60 [==============================] - 3s 51ms/step - loss: 1.9492 - accuracy: 0.3603 - val_loss: 1.6435 - val_accuracy: 0.4113
Epoch 17/200
60/60 [==============================] - 3s 51ms/step - loss: 1.8824 - accuracy: 0.3919 - val_loss: 1.5447 - val_accuracy: 0.4453
Epoch 18/200
60/60 [==============================] - 3s 47ms/step - loss: 1.8226 - accuracy: 0.4217 - val_loss: 1.3777 - val_accuracy: 0.5245
Epoch 19/200
60/60 [==============================] - 3s 46ms/step - loss: 1.7585 - accuracy: 0.4499 - val_loss: 1.4319 - val_accuracy: 0.5094
Epoch 20/200
60/60 [==============================] - 3s 47ms/step - loss: 1.7068 - accuracy: 0.4658 - val_loss: 1.3659 - val_accuracy: 0.5396
Epoch 21/200
60/60 [==============================] - 3s 47ms/step - loss: 1.6934 - accuracy: 0.4722 - val_loss: 1.3075 - val_accuracy: 0.5283
Epoch 22/200
60/60 [==============================] - 3s 46ms/step - loss: 1.6500 - accuracy: 0.4953 - val_loss: 1.2963 - val_accuracy: 0.5811
Epoch 23/200
60/60 [==============================] - 3s 46ms/step - loss: 1.6123 - accuracy: 0.5022 - val_loss: 1.2364 - val_accuracy: 0.5811
Epoch 24/200
60/60 [==============================] - 3s 52ms/step - loss: 1.5928 - accuracy: 0.5214 - val_loss: 1.1667 - val_accuracy: 0.6302
Epoch 25/200
60/60 [==============================] - 3s 49ms/step - loss: 1.5413 - accuracy: 0.5261 - val_loss: 1.1702 - val_accuracy: 0.6151
Epoch 26/200
60/60 [==============================] - 3s 47ms/step - loss: 1.5170 - accuracy: 0.5392 - val_loss: 1.1360 - val_accuracy: 0.5887
Epoch 27/200
60/60 [==============================] - 3s 48ms/step - loss: 1.4875 - accuracy: 0.5470 - val_loss: 1.2224 - val_accuracy: 0.6340
Epoch 28/200
60/60 [==============================] - 3s 46ms/step - loss: 1.4421 - accuracy: 0.5652 - val_loss: 1.1103 - val_accuracy: 0.6302
Epoch 29/200
60/60 [==============================] - 3s 46ms/step - loss: 1.4260 - accuracy: 0.5732 - val_loss: 1.0228 - val_accuracy: 0.6830
Epoch 30/200
60/60 [==============================] - 3s 47ms/step - loss: 1.3899 - accuracy: 0.5784 - val_loss: 1.0230 - val_accuracy: 0.6906
Epoch 31/200
60/60 [==============================] - 3s 51ms/step - loss: 1.4091 - accuracy: 0.5708 - val_loss: 0.9867 - val_accuracy: 0.6642
Epoch 32/200
60/60 [==============================] - 3s 51ms/step - loss: 1.3781 - accuracy: 0.5837 - val_loss: 1.0014 - val_accuracy: 0.6906
Epoch 33/200
60/60 [==============================] - 3s 50ms/step - loss: 1.3553 - accuracy: 0.5916 - val_loss: 0.9512 - val_accuracy: 0.6868
Epoch 34/200
60/60 [==============================] - 3s 48ms/step - loss: 1.3381 - accuracy: 0.6013 - val_loss: 0.9343 - val_accuracy: 0.7019
Epoch 35/200
60/60 [==============================] - 3s 47ms/step - loss: 1.3178 - accuracy: 0.6039 - val_loss: 0.9480 - val_accuracy: 0.6906
Epoch 36/200
60/60 [==============================] - 3s 46ms/step - loss: 1.2903 - accuracy: 0.6093 - val_loss: 0.9215 - val_accuracy: 0.7132
Epoch 37/200
60/60 [==============================] - 3s 49ms/step - loss: 1.2749 - accuracy: 0.6060 - val_loss: 0.9593 - val_accuracy: 0.6981
Epoch 38/200
60/60 [==============================] - 3s 48ms/step - loss: 1.2633 - accuracy: 0.6183 - val_loss: 0.9686 - val_accuracy: 0.6981
Epoch 39/200
60/60 [==============================] - 3s 46ms/step - loss: 1.2386 - accuracy: 0.6159 - val_loss: 0.9560 - val_accuracy: 0.7132
Epoch 40/200
60/60 [==============================] - 3s 55ms/step - loss: 1.2758 - accuracy: 0.6149 - val_loss: 0.9374 - val_accuracy: 0.7170
Epoch 41/200
60/60 [==============================] - 3s 51ms/step - loss: 1.2375 - accuracy: 0.6259 - val_loss: 0.8836 - val_accuracy: 0.7585
Epoch 42/200
60/60 [==============================] - 3s 47ms/step - loss: 1.2033 - accuracy: 0.6344 - val_loss: 0.8902 - val_accuracy: 0.7208
Epoch 43/200
60/60 [==============================] - 3s 48ms/step - loss: 1.2244 - accuracy: 0.6278 - val_loss: 0.8635 - val_accuracy: 0.7434
Epoch 44/200
60/60 [==============================] - 3s 48ms/step - loss: 1.2250 - accuracy: 0.6364 - val_loss: 0.9521 - val_accuracy: 0.6868
Epoch 45/200
60/60 [==============================] - 3s 47ms/step - loss: 1.1975 - accuracy: 0.6400 - val_loss: 0.8959 - val_accuracy: 0.7132
Epoch 46/200
60/60 [==============================] - 3s 46ms/step - loss: 1.1781 - accuracy: 0.6443 - val_loss: 0.8490 - val_accuracy: 0.7245
Epoch 47/200
60/60 [==============================] - 3s 49ms/step - loss: 1.1894 - accuracy: 0.6419 - val_loss: 0.8922 - val_accuracy: 0.7132
Epoch 48/200
60/60 [==============================] - 3s 52ms/step - loss: 1.1805 - accuracy: 0.6438 - val_loss: 0.8742 - val_accuracy: 0.7434
Epoch 49/200
60/60 [==============================] - 3s 51ms/step - loss: 1.1445 - accuracy: 0.6541 - val_loss: 0.8578 - val_accuracy: 0.7358
Epoch 50/200
60/60 [==============================] - 3s 46ms/step - loss: 1.1458 - accuracy: 0.6557 - val_loss: 0.8553 - val_accuracy: 0.7170
Epoch 51/200
60/60 [==============================] - 3s 46ms/step - loss: 1.1302 - accuracy: 0.6552 - val_loss: 0.8131 - val_accuracy: 0.7472
Epoch 52/200
60/60 [==============================] - 3s 46ms/step - loss: 1.1169 - accuracy: 0.6617 - val_loss: 0.8187 - val_accuracy: 0.7509
Epoch 53/200
60/60 [==============================] - 3s 49ms/step - loss: 1.1030 - accuracy: 0.6699 - val_loss: 0.8120 - val_accuracy: 0.7509
Epoch 54/200
60/60 [==============================] - 3s 46ms/step - loss: 1.1176 - accuracy: 0.6615 - val_loss: 0.9566 - val_accuracy: 0.7132
Epoch 55/200
60/60 [==============================] - 3s 48ms/step - loss: 1.1078 - accuracy: 0.6630 - val_loss: 0.8636 - val_accuracy: 0.7245
Epoch 56/200
60/60 [==============================] - 3s 52ms/step - loss: 1.0843 - accuracy: 0.6720 - val_loss: 0.8193 - val_accuracy: 0.7208
Epoch 57/200
60/60 [==============================] - 3s 51ms/step - loss: 1.0990 - accuracy: 0.6734 - val_loss: 0.8147 - val_accuracy: 0.7472
Epoch 58/200
60/60 [==============================] - 3s 46ms/step - loss: 1.0993 - accuracy: 0.6703 - val_loss: 0.8066 - val_accuracy: 0.7660
Epoch 59/200
60/60 [==============================] - 3s 47ms/step - loss: 1.0796 - accuracy: 0.6750 - val_loss: 0.7838 - val_accuracy: 0.7623
Epoch 60/200
60/60 [==============================] - 3s 48ms/step - loss: 1.0611 - accuracy: 0.6815 - val_loss: 0.7997 - val_accuracy: 0.7660
Epoch 61/200
60/60 [==============================] - 3s 48ms/step - loss: 1.0662 - accuracy: 0.6809 - val_loss: 0.8416 - val_accuracy: 0.7321
Epoch 62/200
60/60 [==============================] - 3s 47ms/step - loss: 1.0482 - accuracy: 0.6843 - val_loss: 0.8388 - val_accuracy: 0.7509
Epoch 63/200
60/60 [==============================] - 3s 46ms/step - loss: 1.0346 - accuracy: 0.6863 - val_loss: 0.7773 - val_accuracy: 0.7774
Epoch 64/200
60/60 [==============================] - 3s 49ms/step - loss: 1.0388 - accuracy: 0.6870 - val_loss: 0.8248 - val_accuracy: 0.7547
Epoch 65/200
60/60 [==============================] - 3s 54ms/step - loss: 1.0396 - accuracy: 0.6932 - val_loss: 0.8267 - val_accuracy: 0.7472
Epoch 66/200
60/60 [==============================] - 3s 52ms/step - loss: 1.0539 - accuracy: 0.6851 - val_loss: 0.8196 - val_accuracy: 0.7509
Epoch 67/200
60/60 [==============================] - 3s 47ms/step - loss: 1.0074 - accuracy: 0.6981 - val_loss: 0.7654 - val_accuracy: 0.7547
Epoch 68/200
60/60 [==============================] - 3s 49ms/step - loss: 1.0025 - accuracy: 0.6958 - val_loss: 0.7708 - val_accuracy: 0.7547
Epoch 69/200
60/60 [==============================] - 3s 47ms/step - loss: 1.0057 - accuracy: 0.7024 - val_loss: 0.7952 - val_accuracy: 0.7623
Epoch 70/200
60/60 [==============================] - 3s 46ms/step - loss: 1.0094 - accuracy: 0.6961 - val_loss: 0.8035 - val_accuracy: 0.7509
Epoch 71/200
60/60 [==============================] - 3s 52ms/step - loss: 0.9985 - accuracy: 0.7007 - val_loss: 0.7987 - val_accuracy: 0.7585
Epoch 72/200
60/60 [==============================] - 3s 51ms/step - loss: 0.9944 - accuracy: 0.7041 - val_loss: 0.8252 - val_accuracy: 0.7434
Epoch 73/200
60/60 [==============================] - 3s 48ms/step - loss: 0.9952 - accuracy: 0.6994 - val_loss: 0.7991 - val_accuracy: 0.7736
Epoch 74/200
60/60 [==============================] - 3s 48ms/step - loss: 0.9819 - accuracy: 0.7050 - val_loss: 0.7493 - val_accuracy: 0.7547
Epoch 75/200
60/60 [==============================] - 3s 48ms/step - loss: 0.9804 - accuracy: 0.7038 - val_loss: 0.7891 - val_accuracy: 0.7660
Epoch 76/200
60/60 [==============================] - 3s 48ms/step - loss: 0.9560 - accuracy: 0.7141 - val_loss: 0.7856 - val_accuracy: 0.7736
Epoch 77/200
60/60 [==============================] - 3s 50ms/step - loss: 0.9627 - accuracy: 0.7041 - val_loss: 0.7814 - val_accuracy: 0.7849
Epoch 78/200
60/60 [==============================] - 3s 49ms/step - loss: 0.9583 - accuracy: 0.7129 - val_loss: 0.7676 - val_accuracy: 0.7623
Epoch 79/200
60/60 [==============================] - 3s 52ms/step - loss: 0.9637 - accuracy: 0.7030 - val_loss: 0.8222 - val_accuracy: 0.7585
Epoch 80/200
60/60 [==============================] - 3s 49ms/step - loss: 0.9562 - accuracy: 0.7071 - val_loss: 0.6938 - val_accuracy: 0.7962
Epoch 81/200
60/60 [==============================] - 3s 47ms/step - loss: 0.9645 - accuracy: 0.7139 - val_loss: 0.8203 - val_accuracy: 0.7547
Epoch 82/200
60/60 [==============================] - 3s 47ms/step - loss: 0.9686 - accuracy: 0.7096 - val_loss: 0.7781 - val_accuracy: 0.7660
Epoch 83/200
60/60 [==============================] - 3s 48ms/step - loss: 0.9505 - accuracy: 0.7152 - val_loss: 0.8036 - val_accuracy: 0.7698
Epoch 84/200
60/60 [==============================] - 3s 48ms/step - loss: 0.9470 - accuracy: 0.7126 - val_loss: 0.7986 - val_accuracy: 0.7509
Epoch 85/200
60/60 [==============================] - 3s 47ms/step - loss: 0.9346 - accuracy: 0.7145 - val_loss: 0.7610 - val_accuracy: 0.7660
Epoch 86/200
60/60 [==============================] - 3s 49ms/step - loss: 0.9345 - accuracy: 0.7193 - val_loss: 0.7963 - val_accuracy: 0.7585
Epoch 87/200
60/60 [==============================] - 3s 55ms/step - loss: 0.9272 - accuracy: 0.7180 - val_loss: 0.7769 - val_accuracy: 0.7434
Epoch 88/200
60/60 [==============================] - 3s 49ms/step - loss: 0.9187 - accuracy: 0.7259 - val_loss: 0.7967 - val_accuracy: 0.7623
Epoch 89/200
60/60 [==============================] - 3s 46ms/step - loss: 0.9145 - accuracy: 0.7198 - val_loss: 0.7638 - val_accuracy: 0.7547
Epoch 90/200
60/60 [==============================] - 3s 47ms/step - loss: 0.9015 - accuracy: 0.7278 - val_loss: 0.8231 - val_accuracy: 0.7736
Epoch 91/200
60/60 [==============================] - 3s 47ms/step - loss: 0.9105 - accuracy: 0.7234 - val_loss: 0.7848 - val_accuracy: 0.7698
Epoch 92/200
60/60 [==============================] - 3s 46ms/step - loss: 0.9087 - accuracy: 0.7261 - val_loss: 0.7998 - val_accuracy: 0.7509
Epoch 93/200
60/60 [==============================] - 3s 50ms/step - loss: 0.9085 - accuracy: 0.7263 - val_loss: 0.7262 - val_accuracy: 0.7774
Epoch 94/200
60/60 [==============================] - 3s 53ms/step - loss: 0.8884 - accuracy: 0.7329 - val_loss: 0.7304 - val_accuracy: 0.7887
Epoch 95/200
60/60 [==============================] - 3s 49ms/step - loss: 0.9162 - accuracy: 0.7231 - val_loss: 0.7399 - val_accuracy: 0.7849
Epoch 96/200
60/60 [==============================] - 3s 46ms/step - loss: 0.8836 - accuracy: 0.7311 - val_loss: 0.7804 - val_accuracy: 0.7623
Epoch 97/200
60/60 [==============================] - 3s 50ms/step - loss: 0.8944 - accuracy: 0.7285 - val_loss: 0.7332 - val_accuracy: 0.8038
Epoch 98/200
60/60 [==============================] - 3s 47ms/step - loss: 0.8789 - accuracy: 0.7344 - val_loss: 0.7032 - val_accuracy: 0.8151
Epoch 99/200
60/60 [==============================] - 3s 47ms/step - loss: 0.8784 - accuracy: 0.7369 - val_loss: 0.7158 - val_accuracy: 0.7925
Epoch 100/200
60/60 [==============================] - 3s 51ms/step - loss: 0.8674 - accuracy: 0.7341 - val_loss: 0.7536 - val_accuracy: 0.7925
Epoch 101/200
60/60 [==============================] - 3s 51ms/step - loss: 0.8885 - accuracy: 0.7295 - val_loss: 0.6984 - val_accuracy: 0.7774
Epoch 102/200
60/60 [==============================] - 3s 51ms/step - loss: 0.8813 - accuracy: 0.7331 - val_loss: 0.7880 - val_accuracy: 0.7585
Epoch 103/200
60/60 [==============================] - 3s 48ms/step - loss: 0.8865 - accuracy: 0.7282 - val_loss: 0.7682 - val_accuracy: 0.7887
Epoch 104/200
60/60 [==============================] - 3s 50ms/step - loss: 0.8680 - accuracy: 0.7352 - val_loss: 0.7466 - val_accuracy: 0.7962
Epoch 105/200
60/60 [==============================] - 3s 47ms/step - loss: 0.8592 - accuracy: 0.7399 - val_loss: 0.7884 - val_accuracy: 0.7660
Epoch 106/200
60/60 [==============================] - 3s 46ms/step - loss: 0.8710 - accuracy: 0.7373 - val_loss: 0.8095 - val_accuracy: 0.7774
Epoch 107/200
60/60 [==============================] - 3s 46ms/step - loss: 0.8642 - accuracy: 0.7400 - val_loss: 0.7541 - val_accuracy: 0.7698
Epoch 108/200
60/60 [==============================] - 3s 48ms/step - loss: 0.8391 - accuracy: 0.7428 - val_loss: 0.7029 - val_accuracy: 0.7887
Epoch 109/200
60/60 [==============================] - 3s 49ms/step - loss: 0.8598 - accuracy: 0.7416 - val_loss: 0.7621 - val_accuracy: 0.7962
Epoch 110/200
60/60 [==============================] - 3s 50ms/step - loss: 0.8479 - accuracy: 0.7387 - val_loss: 0.7131 - val_accuracy: 0.8038
Epoch 111/200
60/60 [==============================] - 3s 51ms/step - loss: 0.8345 - accuracy: 0.7493 - val_loss: 0.7059 - val_accuracy: 0.7962
Epoch 112/200
60/60 [==============================] - 3s 51ms/step - loss: 0.8535 - accuracy: 0.7390 - val_loss: 0.7722 - val_accuracy: 0.7811
Epoch 113/200
60/60 [==============================] - 3s 47ms/step - loss: 0.8364 - accuracy: 0.7429 - val_loss: 0.7281 - val_accuracy: 0.7925
Epoch 114/200
60/60 [==============================] - 3s 46ms/step - loss: 0.8241 - accuracy: 0.7437 - val_loss: 0.8214 - val_accuracy: 0.7887
Epoch 115/200
60/60 [==============================] - 3s 46ms/step - loss: 0.8446 - accuracy: 0.7433 - val_loss: 0.7915 - val_accuracy: 0.7849
Epoch 116/200
60/60 [==============================] - 3s 47ms/step - loss: 0.8238 - accuracy: 0.7467 - val_loss: 0.7177 - val_accuracy: 0.7887
Epoch 117/200
60/60 [==============================] - 3s 49ms/step - loss: 0.8360 - accuracy: 0.7457 - val_loss: 0.7907 - val_accuracy: 0.7660
Epoch 118/200
60/60 [==============================] - 3s 47ms/step - loss: 0.8101 - accuracy: 0.7501 - val_loss: 0.7782 - val_accuracy: 0.7811
Epoch 119/200
60/60 [==============================] - 3s 50ms/step - loss: 0.8387 - accuracy: 0.7421 - val_loss: 0.7642 - val_accuracy: 0.7774
Epoch 120/200
60/60 [==============================] - 3s 53ms/step - loss: 0.8334 - accuracy: 0.7496 - val_loss: 0.7956 - val_accuracy: 0.7698
Epoch 121/200
60/60 [==============================] - 3s 53ms/step - loss: 0.8378 - accuracy: 0.7459 - val_loss: 0.7534 - val_accuracy: 0.7925
Epoch 122/200
60/60 [==============================] - 3s 47ms/step - loss: 0.8420 - accuracy: 0.7436 - val_loss: 0.8041 - val_accuracy: 0.7774
Epoch 123/200
60/60 [==============================] - 3s 46ms/step - loss: 0.8188 - accuracy: 0.7528 - val_loss: 0.7223 - val_accuracy: 0.7849
Epoch 124/200
60/60 [==============================] - 3s 46ms/step - loss: 0.8122 - accuracy: 0.7529 - val_loss: 0.7370 - val_accuracy: 0.7962
Epoch 125/200
60/60 [==============================] - 3s 50ms/step - loss: 0.8061 - accuracy: 0.7567 - val_loss: 0.8133 - val_accuracy: 0.7660
Epoch 126/200
60/60 [==============================] - 3s 47ms/step - loss: 0.8216 - accuracy: 0.7508 - val_loss: 0.7654 - val_accuracy: 0.7887
Epoch 127/200
60/60 [==============================] - 3s 48ms/step - loss: 0.8220 - accuracy: 0.7461 - val_loss: 0.7608 - val_accuracy: 0.7925
Epoch 128/200
60/60 [==============================] - 3s 55ms/step - loss: 0.7927 - accuracy: 0.7576 - val_loss: 0.7271 - val_accuracy: 0.8000
Epoch 129/200
60/60 [==============================] - 3s 50ms/step - loss: 0.8023 - accuracy: 0.7534 - val_loss: 0.7965 - val_accuracy: 0.7849
Epoch 130/200
60/60 [==============================] - 3s 46ms/step - loss: 0.8040 - accuracy: 0.7509 - val_loss: 0.7616 - val_accuracy: 0.7925
Epoch 131/200
60/60 [==============================] - 3s 46ms/step - loss: 0.7866 - accuracy: 0.7597 - val_loss: 0.8460 - val_accuracy: 0.7962
Epoch 132/200
60/60 [==============================] - 3s 52ms/step - loss: 0.7883 - accuracy: 0.7559 - val_loss: 0.7910 - val_accuracy: 0.7887
Epoch 133/200
60/60 [==============================] - 3s 47ms/step - loss: 0.7980 - accuracy: 0.7583 - val_loss: 0.7370 - val_accuracy: 0.7887
Epoch 134/200
60/60 [==============================] - 3s 47ms/step - loss: 0.7992 - accuracy: 0.7581 - val_loss: 0.7559 - val_accuracy: 0.8000
Epoch 135/200
60/60 [==============================] - 3s 55ms/step - loss: 0.7952 - accuracy: 0.7585 - val_loss: 0.8766 - val_accuracy: 0.7509
Epoch 136/200
60/60 [==============================] - 3s 51ms/step - loss: 0.7972 - accuracy: 0.7597 - val_loss: 0.8334 - val_accuracy: 0.7811
Epoch 137/200
60/60 [==============================] - 3s 50ms/step - loss: 0.7679 - accuracy: 0.7626 - val_loss: 0.7726 - val_accuracy: 0.7925
Epoch 138/200
60/60 [==============================] - 3s 47ms/step - loss: 0.7908 - accuracy: 0.7560 - val_loss: 0.8761 - val_accuracy: 0.7660
Epoch 139/200
60/60 [==============================] - 3s 52ms/step - loss: 0.7899 - accuracy: 0.7547 - val_loss: 0.8005 - val_accuracy: 0.7849
Epoch 140/200
60/60 [==============================] - 3s 48ms/step - loss: 0.7742 - accuracy: 0.7651 - val_loss: 0.8430 - val_accuracy: 0.7811
Epoch 141/200
60/60 [==============================] - 3s 47ms/step - loss: 0.7585 - accuracy: 0.7667 - val_loss: 0.7672 - val_accuracy: 0.7660
Epoch 142/200
60/60 [==============================] - 3s 47ms/step - loss: 0.7988 - accuracy: 0.7613 - val_loss: 0.8089 - val_accuracy: 0.7698
Epoch 143/200
60/60 [==============================] - 3s 52ms/step - loss: 0.7697 - accuracy: 0.7639 - val_loss: 0.8076 - val_accuracy: 0.7811
Epoch 144/200
60/60 [==============================] - 3s 51ms/step - loss: 0.7661 - accuracy: 0.7626 - val_loss: 0.8142 - val_accuracy: 0.7811
Epoch 145/200
60/60 [==============================] - 3s 51ms/step - loss: 0.7804 - accuracy: 0.7644 - val_loss: 0.8211 - val_accuracy: 0.7887
Epoch 146/200
60/60 [==============================] - 3s 48ms/step - loss: 0.7850 - accuracy: 0.7610 - val_loss: 0.8552 - val_accuracy: 0.7698
Epoch 147/200
60/60 [==============================] - 3s 50ms/step - loss: 0.7618 - accuracy: 0.7714 - val_loss: 0.9357 - val_accuracy: 0.7660
Epoch 148/200
60/60 [==============================] - 3s 46ms/step - loss: 0.7613 - accuracy: 0.7664 - val_loss: 0.7527 - val_accuracy: 0.8038
Epoch 149/200
60/60 [==============================] - 3s 46ms/step - loss: 0.7449 - accuracy: 0.7753 - val_loss: 0.7683 - val_accuracy: 0.7849
Epoch 150/200
60/60 [==============================] - 3s 48ms/step - loss: 0.7546 - accuracy: 0.7710 - val_loss: 0.8452 - val_accuracy: 0.8000
Epoch 151/200
60/60 [==============================] - 3s 51ms/step - loss: 0.7619 - accuracy: 0.7705 - val_loss: 0.8600 - val_accuracy: 0.7811
Epoch 152/200
60/60 [==============================] - 3s 49ms/step - loss: 0.7576 - accuracy: 0.7665 - val_loss: 0.8038 - val_accuracy: 0.7962
Epoch 153/200
60/60 [==============================] - 3s 52ms/step - loss: 0.7651 - accuracy: 0.7678 - val_loss: 0.7642 - val_accuracy: 0.7925
Epoch 154/200
60/60 [==============================] - 3s 50ms/step - loss: 0.7693 - accuracy: 0.7634 - val_loss: 0.7332 - val_accuracy: 0.8264
Epoch 155/200
60/60 [==============================] - 3s 49ms/step - loss: 0.7524 - accuracy: 0.7715 - val_loss: 0.7199 - val_accuracy: 0.8075
Epoch 156/200
60/60 [==============================] - 3s 46ms/step - loss: 0.7563 - accuracy: 0.7718 - val_loss: 0.7374 - val_accuracy: 0.8075
Epoch 157/200
60/60 [==============================] - 3s 47ms/step - loss: 0.7200 - accuracy: 0.7781 - val_loss: 0.7267 - val_accuracy: 0.8075
Epoch 158/200
60/60 [==============================] - 3s 50ms/step - loss: 0.7293 - accuracy: 0.7716 - val_loss: 0.7407 - val_accuracy: 0.8226
Epoch 159/200
60/60 [==============================] - 3s 49ms/step - loss: 0.7348 - accuracy: 0.7770 - val_loss: 0.8587 - val_accuracy: 0.7736
Epoch 160/200
60/60 [==============================] - 3s 50ms/step - loss: 0.7279 - accuracy: 0.7758 - val_loss: 0.7029 - val_accuracy: 0.7962
Epoch 161/200
60/60 [==============================] - 3s 51ms/step - loss: 0.7446 - accuracy: 0.7694 - val_loss: 0.7470 - val_accuracy: 0.8113
Epoch 162/200
60/60 [==============================] - 3s 52ms/step - loss: 0.7270 - accuracy: 0.7786 - val_loss: 0.8031 - val_accuracy: 0.7925
Epoch 163/200
60/60 [==============================] - 3s 47ms/step - loss: 0.7332 - accuracy: 0.7802 - val_loss: 0.6962 - val_accuracy: 0.7887
Epoch 164/200
60/60 [==============================] - 3s 47ms/step - loss: 0.7149 - accuracy: 0.7823 - val_loss: 0.7301 - val_accuracy: 0.7962
Epoch 165/200
60/60 [==============================] - 3s 46ms/step - loss: 0.7524 - accuracy: 0.7715 - val_loss: 0.7118 - val_accuracy: 0.7962
Epoch 166/200
60/60 [==============================] - 3s 47ms/step - loss: 0.7368 - accuracy: 0.7747 - val_loss: 0.6686 - val_accuracy: 0.8151
Epoch 167/200
60/60 [==============================] - 3s 46ms/step - loss: 0.7351 - accuracy: 0.7723 - val_loss: 0.7163 - val_accuracy: 0.8038
Epoch 168/200
60/60 [==============================] - 3s 49ms/step - loss: 0.7245 - accuracy: 0.7752 - val_loss: 0.7149 - val_accuracy: 0.7887
Epoch 169/200
60/60 [==============================] - 3s 53ms/step - loss: 0.7406 - accuracy: 0.7731 - val_loss: 0.7639 - val_accuracy: 0.8151
Epoch 170/200
60/60 [==============================] - 3s 47ms/step - loss: 0.7073 - accuracy: 0.7773 - val_loss: 0.7144 - val_accuracy: 0.8113
Epoch 171/200
60/60 [==============================] - 3s 46ms/step - loss: 0.7338 - accuracy: 0.7745 - val_loss: 0.7062 - val_accuracy: 0.7887
Epoch 172/200
60/60 [==============================] - 3s 47ms/step - loss: 0.7337 - accuracy: 0.7744 - val_loss: 0.7087 - val_accuracy: 0.8113
Epoch 173/200
60/60 [==============================] - 3s 48ms/step - loss: 0.7336 - accuracy: 0.7798 - val_loss: 0.6861 - val_accuracy: 0.8000
Epoch 174/200
60/60 [==============================] - 3s 46ms/step - loss: 0.7238 - accuracy: 0.7739 - val_loss: 0.7165 - val_accuracy: 0.8038
Epoch 175/200
60/60 [==============================] - 3s 46ms/step - loss: 0.7250 - accuracy: 0.7783 - val_loss: 0.7595 - val_accuracy: 0.8038
Epoch 176/200
60/60 [==============================] - 3s 47ms/step - loss: 0.7176 - accuracy: 0.7823 - val_loss: 0.7246 - val_accuracy: 0.8151
Epoch 177/200
60/60 [==============================] - 3s 52ms/step - loss: 0.7107 - accuracy: 0.7820 - val_loss: 0.8953 - val_accuracy: 0.7660
Epoch 178/200
60/60 [==============================] - 3s 50ms/step - loss: 0.6931 - accuracy: 0.7834 - val_loss: 0.8356 - val_accuracy: 0.7887
Epoch 179/200
60/60 [==============================] - 3s 48ms/step - loss: 0.7125 - accuracy: 0.7804 - val_loss: 0.7465 - val_accuracy: 0.7962
Epoch 180/200
60/60 [==============================] - 3s 46ms/step - loss: 0.7098 - accuracy: 0.7816 - val_loss: 0.6974 - val_accuracy: 0.8038
Epoch 181/200
60/60 [==============================] - 3s 48ms/step - loss: 0.6992 - accuracy: 0.7883 - val_loss: 0.6795 - val_accuracy: 0.8075
Epoch 182/200
60/60 [==============================] - 3s 48ms/step - loss: 0.6875 - accuracy: 0.7918 - val_loss: 0.7194 - val_accuracy: 0.7887
Epoch 183/200
60/60 [==============================] - 3s 47ms/step - loss: 0.7200 - accuracy: 0.7812 - val_loss: 0.6723 - val_accuracy: 0.8264
Epoch 184/200
60/60 [==============================] - 3s 46ms/step - loss: 0.7096 - accuracy: 0.7840 - val_loss: 0.6552 - val_accuracy: 0.8226
Epoch 185/200
60/60 [==============================] - 3s 51ms/step - loss: 0.7042 - accuracy: 0.7820 - val_loss: 0.7050 - val_accuracy: 0.8113
Epoch 186/200
60/60 [==============================] - 3s 52ms/step - loss: 0.7036 - accuracy: 0.7840 - val_loss: 0.7945 - val_accuracy: 0.7736
Epoch 187/200
60/60 [==============================] - 3s 48ms/step - loss: 0.6828 - accuracy: 0.7854 - val_loss: 0.6409 - val_accuracy: 0.8075
Epoch 188/200
60/60 [==============================] - 3s 51ms/step - loss: 0.7044 - accuracy: 0.7844 - val_loss: 0.7194 - val_accuracy: 0.7887
Epoch 189/200
60/60 [==============================] - 3s 47ms/step - loss: 0.7007 - accuracy: 0.7840 - val_loss: 0.7889 - val_accuracy: 0.7811
Epoch 190/200
60/60 [==============================] - 3s 47ms/step - loss: 0.6846 - accuracy: 0.7862 - val_loss: 0.7795 - val_accuracy: 0.7962
Epoch 191/200
60/60 [==============================] - 3s 49ms/step - loss: 0.7148 - accuracy: 0.7834 - val_loss: 0.7292 - val_accuracy: 0.7925
Epoch 192/200
60/60 [==============================] - 3s 51ms/step - loss: 0.6892 - accuracy: 0.7892 - val_loss: 0.7425 - val_accuracy: 0.8226
Epoch 193/200
60/60 [==============================] - 3s 51ms/step - loss: 0.6792 - accuracy: 0.7895 - val_loss: 0.8206 - val_accuracy: 0.8038
Epoch 194/200
60/60 [==============================] - 3s 51ms/step - loss: 0.6677 - accuracy: 0.7963 - val_loss: 0.7690 - val_accuracy: 0.8075
Epoch 195/200
60/60 [==============================] - 3s 48ms/step - loss: 0.6766 - accuracy: 0.7920 - val_loss: 0.7098 - val_accuracy: 0.8302
Epoch 196/200
60/60 [==============================] - 3s 47ms/step - loss: 0.6938 - accuracy: 0.7882 - val_loss: 0.7450 - val_accuracy: 0.8151
Epoch 197/200
60/60 [==============================] - 3s 48ms/step - loss: 0.6542 - accuracy: 0.7959 - val_loss: 0.7367 - val_accuracy: 0.8075
Epoch 198/200
60/60 [==============================] - 3s 51ms/step - loss: 0.6762 - accuracy: 0.7908 - val_loss: 0.7891 - val_accuracy: 0.7849
Epoch 199/200
60/60 [==============================] - 3s 55ms/step - loss: 0.6631 - accuracy: 0.7956 - val_loss: 0.8513 - val_accuracy: 0.7925
Epoch 200/200
60/60 [==============================] - 3s 49ms/step - loss: 0.6724 - accuracy: 0.7907 - val_loss: 0.7312 - val_accuracy: 0.8038`;

const codeSnippet3 = document.getElementById('codeSnippet3');
codeSnippet3.textContent = `preds = model.predict(test_ds)
y_pred = [np.argmax(pred) for pred in preds]
y_pred`;

const codeSnippet4 = document.getElementById('codeSnippet4');
codeSnippet4.textContent = `accuracy = accuracy_score(y_true, y_pred)
precision = precision_score(y_true, y_pred, average='weighted')
recall = recall_score(y_true, y_pred, average='weighted')
f1 = f1_score(y_true, y_pred, average='weighted')

print(f'Accuracy: {accuracy}\nPrecision: {precision}\nRecall: {recall}\nF1 Score: {f1}\n')`;

const codeSnippet5 = document.getElementById('codeSnippet5');
codeSnippet5.textContent = `Accuracy: 0.7735849056603774
Precision: 0.7983153638814017
Recall: 0.7735849056603774
F1 Score: 0.7667648912931933`;