# Speech Synthesis

---

# Mary TTS

MARY is an open-source, multilingual Text-to-Speech Synthesis platform written in Java. It was originally developed as a collaborative project of DFKI's Language Technology lab and the Institute of Phonetics at Saarland University and is now being maintained by DFKI.

As of version 4.3, MARY TTS supports German, British and American English, Telugu, Turkish, and Russian; more languages are in preparation. MARY TTS comes with toolkits for quickly adding support for new languages and for building unit selection and HMM-based synthesis voices.

## Key Components

* Multi-threaded server
* Java Client
* Built in voices

--- 

# Input

## Plain Text

## Sable
  
SABLE is an XML markup language used to annotate texts for speech synthesis. It defines tags which control the way words, numbers, and sentences are reproduced by a computer. SABLE was developed as an informal joint project between Sun Microsystems, AT&T, Bell Labs and Edinburgh University (the initial letters of each make the word "SABLE") as an initiative to combine the three previous speech synthesis markup languages SSML, STML, and JSML.

## Speech Synthesis Markup Language (SSML) 

Speech Synthesis Markup Language (SSML) is an XML-based markup language for speech synthesis applications. It is a recommendation of the W3C's voice browser working group. SSML is often embedded in VoiceXML scripts to drive interactive telephony systems. However, it also may be used alone, such as for creating audio books. For desktop applications, other markup languages are popular, including Apple's embedded speech commands, and Microsoft's SAPI Text to speech (TTS) markup, also an XML language.

## Mary XML

MaryXML is an internal, relatively low-level markup which reflects the modelling capabilities of this particular TtS system.   

---

# Example SSML

    !xml
    <?xml version="1.0"?>
    <speak xmlns="http://www.w3.org/2001/10/synthesis"
       xmlns:dc="http://purl.org/dc/elements/1.1/"
       version="1.0">
       <metadata>
         <dc:title xml:lang="en">Telephone Menu: Level 1</dc:title>
       </metadata>
       <p>
         <s xml:lang="en-US">
           <voice name="David" gender="male" age="25">
            For English, press <emphasis>one</emphasis>.
           </voice>
         </s>
         <s xml:lang="es-MX">
           <voice name="Miguel" gender="male" age="25">
            Para español, oprima el <emphasis>dos</emphasis>.
           </voice>
         </s>
       </p>
     </speak>

---

# API Usage

    !clojure
    (ns bloodymary.mary
      (:import
        (marytts.client.http Address)
        (java.io ByteArrayInputStream ByteArrayOutputStream)))

    (def *host* "localhost")
    (def *port* 59125)
    (def *input-type* "TEXT")
    (def *audio-type* "AU")
    (def *locale* "en_GB")
    (def *voice-name* "dfki-spike-hsmm")
    (def *style* "")
    (def *effects* "")

    (defn get-audio [s & options]
      (let [stream (ByteArrayOutputStream.)
            opts (apply hash-map options)
            client (get-client (get opts :host *host*) (get opts :port *port*))]
        (.process
          client s
          (get opts :input-type *input-type*)
          "AUDIO"
          (get opts :locale *locale*)
          (get opts :audio-type *audio-type*)
          (get opts :voice-name *voice-name*)
          stream)
        (.toByteArray stream)))

---
 
# Demo


