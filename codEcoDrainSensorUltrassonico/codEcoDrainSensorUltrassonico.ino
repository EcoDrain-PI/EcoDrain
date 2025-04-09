#include "Ultrasonic.h" //inclui a biblioteca do sensor ultrassônico
const int PINO_TRIGGER = 12; //define o pino trigger na entrada 12
const int PINO_ECHO = 13; //define o pino echo na entrada 13
const int maximo = 70; //define o máximo
const int minimo = 5; //define o mínimo
int distancia;

HC_SR04 sensor(PINO_TRIGGER, PINO_ECHO); //Atribuição de variáveis à biblioteca

void setup(){  //função que será executada somente uma vez
    Serial.begin(9600); // inicializando o monitor serial
}

void loop(){ //funcao que sera realizada continuamente

    distancia = sensor.distance();

    Serial.print("DistMaxima:");
    Serial.print(maximo);
    Serial.print(",");
    Serial.print("Distancia:");
    Serial.print(distancia);
    Serial.print(",");
    Serial.print("DistMinima:");
    Serial.println(minimo);

  delay(1000);
}

