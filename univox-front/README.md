logged chant giver:
-creates a chant room;
-writes chant;
-sends out chant;
-sends link via external channels (email, whatsapp etc);

user who already has password to chant room:
-entering chant room;
-receives notification of new chant;

logged user who does not have access to open chant room yet:
-clicks on chant room;
-automatically enters chant room;

logged user who does not have access to restricted chat room yet:
-clicks on link leading to chant room;
-enters chant room;

non-logged user who has link to chant room:
-clicks on link leading to chant room;
-enters chant room;

non-logged user who does not have link to chant room:
-enters site;
-enters chant room list;
-selects chant room;
-enters chant room;


SERVICE
-Cognito;
-DynamoDB;
-AWS Lambda;
-AWS Amplify;
-AWS API gateway-API;
-WebSockets API gateway;
-AWS IAM;

1: contrato serviço para hospedar nosso front-end (AWS Amplify);
2: contrato um serviço para armazenar dados de novos usuários (Cognito);
3: contrato serviço para receber requisitos dos usuários (AWS API gateway);
4: contrato serviço para processar requisitos recebidos pelo API Gateway (AWS Lambda);
5: contrato serviço para receber auto-update para os chants atualizarem sem
   que o chantsayer tenha que atualizar a tela (WebSockets API gateway);
6: AWS Lambda, já contratado, processará as atualizações de cada chant room;

-if user checks out of chantroom and comes back, chant will still be up-to-date,
 due to the fact that AWS Lambda is already updating information by the second
 and sending it out;
-if chantgiver is disconnected through no fault of his/her own, a 15-minute forgiveness
 period is started for room to remain open so chantgiver can reconnect; message is sent
 to chantsayers present in room notifying them of chantgiver disconnection and time
 remaining for chant room to close;
-in event of chantsayer deciding to sabotage chantroom by entering multiple tabs into
 the room at once, a mechanism needs to be established to do one of the following:
 a) ascertain whether link provided is already in use;
 b) ascertain that only one chantsayer is using an IP at a time;
-in event of chantgiver stopping their chant but keeping room active:
 a) chantgiver decides how long room will stay open (24h limit)
 b) a message will be sent ten minutes after last event in the chantroom, asking if
    Chantgiver is still there and wants to leave room open. Chantgiver will have one minute to
    interact with message. after message is ignored or option to close chantroom is
    selected, chantsayers will be notified via message that chantroom will close
    in 30 seconds.
-cold start problem will be solved in the future with a test
-do not save chant onto data bank. If chant is characterizeable as hate speech or
 incitement to violence:
 -in the future:  use AI to ascertain whether a chant is hate speech or incitement
 to violence 
 -for now: save keyword list of words to be avoided, add them to no-approve word list.
-minimum age to use app: 18 years old

-payment tiers:
    -platinum
      -unlimited number of chantsayers;
      -unlimited chants;
      -unlimited chant size;
    -gold
      -5 chants per day;
      -40 chantsayers per room;
      -200 characters per chant;
    -silver
      -1 chant per day;
      -40 chantsayers per room;
      -200 characters per chant;
    -free
      -1 chant per week;
      -20 chantsayers per room;
      -100 characters per chant;
  
FRONTEND SPECIFICS
-on the pc: click to play chant automatically, click again to pause;
-new chant will overwrite old chants;
-chantsayers can like or dislike chant if they wish, as well as report chant;
-preview screen after person writes chant
-enable preset color pallets for background and chant for chantgiver to choose
