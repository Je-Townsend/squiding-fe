import React, { useEffect } from 'react';
import './Footer.css';

function Footer() {
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (footer) {
        // Check if footer is not null before using it
        if (
          window.scrollY + window.innerHeight >
          document.body.scrollHeight - 20
        ) {
          footer.classList.add("show");
        } else {
          footer.classList.remove("show");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <div style={{ flex: "1", marginBottom: "50px" }}>
          <p>
            eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat,seddiam voluptua. eirmod tempor invidunt ut labore et
            doloremagnadiam voluptua. eirmod tempor invidunt ut labore et
            doloremagnaaliquyam erat, sed diam voluptua.eirmod tempor invidunt
            utlabore etdiam voluptua. eirmod tempor invidunt ut labore et
            doloremagnaaliquyam erat, sed diam voluptua.eirmod tempor invidunt
            utlabore etaliquyam erat, sed diam voluptua.eirmod tempor invidunt
            utlabore etdolore magna aliquyam erat, sed diam voluptua.eirmod
            temporinvidunt labore et dolore magna aliquyam erat, sed
            diamvoluptua.eirmodtempor invidunt ut labore et dolore magna
            aliquyamerat, sed diamtempor invidunt ut labore et dolore magna
            aliquyamerat, sed diamvoluptua.eirmod tempor invidunt ut labore et
            doloremagna aliquyamtempor invidunt ut labore et dolore magna
            aliquyamerat, sed diamvoluptua.eirmod tempor invidunt ut labore et
            doloremagna aliquyamvoluptua.eirmod tempor invidunt ut labore et
            doloremagna aliquyamerat, sed diam voluptua.eirmod tempor invidunt
            utlabore et doloretempor invidunt ut labore et dolore magna
            aliquyamerat, sed diamvoluptua.eirmod tempor invidunt ut labore et
            doloremagna aliquyamvoluptua.eirmod tempor invidunt ut labore et
            doloremagna aliquyamerat, sed diam voluptua.eirmod tempor invidunt
            utlabore et dolorevoluptua.eirmod tempor invidunt ut labore et
            doloremagna aliquyamerat, sed diam voluptua.eirmod tempor invidunt
            utlabore et doloreerat, sed diam voluptua.eirmod tempor invidunt
            utlabore et doloremagna aliquyam erat, sed diam voluptua.eirmod
            temporinvidunt uttempor invidunt ut labore et dolore magna aliquyam
            erat,sed diamvoluptua.eirmod tempor invidunt ut labore et dolore
            magnaaliquyamvoluptua.eirmod tempor invidunt ut labore et dolore
            magnaaliquyamerat, sed diam voluptua.eirmod tempor invidunt ut
            labore etdolorevoluptua.eirmod tempor invidunt ut labore et dolore
            magnaaliquyamerat, sed diam voluptua.eirmod tempor invidunt ut
            labore etdoloreerat, sed diam voluptua.eirmod tempor invidunt ut
            labore etdoloremagna aliquyam erat, sed diam voluptua.eirmod tempor
            inviduntutvoluptua.eirmod tempor invidunt ut labore et dolore
            magnaaliquyamerat, sed diam voluptua.eirmod tempor invidunt ut
            labore etdoloreerat, sed diam voluptua.eirmod tempor invidunt ut
            labore etdoloremagna aliquyam erat, sed diam voluptua.eirmod tempor
            inviduntuterat, sed diam voluptua.eirmod tempor invidunt ut labore
            etdoloremagna aliquyam erat, sed diam voluptua.eirmod tempor
            inviduntutmagna aliquyam erat, sed diam voluptua.eirmod tempor
            inviduntutlabore et dolore magna aliquyam erat, sed
            diamvoluptua.eirmodlabore et dolore magna aliquyam erat, sed
            diamvoluptua.eirmodtempor invidunt ut labore et dolore magna
            aliquyamerat, sed diamtempor invidunt ut labore et dolore magna
            aliquyamerat, sed diamvoluptua.eirmod tempor invidunt ut labore et
            doloremagna aliquyamtempor invidunt ut labore et dolore magna
            aliquyamerat, sed diamvoluptua.eirmod tempor invidunt ut labore et
            doloremagna aliquyamvoluptua.eirmod tempor invidunt ut labore et
            doloremagna aliquyamerat, sed diam voluptua.eirmod tempor invidunt
            utlabore et doloretempor invidunt ut labore et dolore magna
            aliquyamerat, sed diamvoluptua.eirmod tempor invidunt ut labore et
            doloremagna aliquyamvoluptua.eirmod tempor invidunt ut labore et
            doloremagna aliquyamerat, sed diam voluptua.eirmod tempor invidunt
            utlabore et dolorevoluptua.eirmod tempor invidunt ut labore et
            doloremagna aliquyamerat, sed diam voluptua.eirmod tempor invidunt
            utlabore et doloreerat, sed diam voluptua.eirmod tempor invidunt
            utlabore et doloremagna aliquyam erat, sed diam voluptua.eirmod
            temporinvidunt uttempor invidunt ut labore et dolore magna aliquyam
            erat,sed diamvoluptua.eirmod tempor invidunt ut labore et dolore
            magnaaliquyamvoluptua.eirmod tempor invidunt ut labore et dolore
            magnaaliquyamerat, sed diam voluptua.eirmod tempor invidunt ut
            labore etdolorevoluptua.eirmod tempor invidunt ut labore et dolore
            magnaaliquyamerat, sed diam voluptua.eirmod tempor invidunt ut
            labore etdoloreerat, sed diam voluptua.eirmod tempor invidunt ut
            labore etdoloremagna aliquyam erat, sed diam voluptua.eirmod tempor
            inviduntutvoluptua.eirmod tempor invidunt ut labore et dolore
            magnaaliquyamerat, sed diam voluptua.eirmod tempor invidunt ut
            labore etdoloreerat, sed diam voluptua.eirmod tempor invidunt ut
            labore etdoloremagna aliquyam erat, sed diam voluptua.eirmod tempor
            inviduntuterat, sed diam voluptua.eirmod tempor invidunt ut labore
            etdoloremagna aliquyam erat, sed diam voluptua.eirmod tempor
            inviduntutmagna aliquyam erat, sed diam voluptua.eirmod tempor
            inviduntutlabore et dolore magna aliquyam erat, sed diam
            voluptua.eirmo eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat,seddiam voluptua. eirmod tempor invidunt ut labore et
            doloremagnadiam voluptua. eirmod tempor invidunt ut labore et
            doloremagnaaliquyam erat, sed diam voluptua.eirmod tempor invidunt
            utlabore etdiam voluptua. eirmod tempor invidunt ut labore et
            doloremagnaaliquyam erat, sed diam voluptua.eirmod tempor invidunt
            utlabore etaliquyam erat, sed diam voluptua.eirmod tempor invidunt
            utlabore etdolore magna aliquyam erat, sed diam voluptua.eirmod
            temporinvidunt labore et dolore magna aliquyam erat, sed
            diamvoluptua.eirmodtempor invidunt ut labore et dolore magna
            aliquyamerat, sed diamtempor invidunt ut labore et dolore magna
            aliquyamerat, sed diamvoluptua.eirmod tempor invidunt ut labore et
            doloremagna aliquyamtempor invidunt ut labore et dolore magna
            aliquyamerat, sed diamvoluptua.eirmod tempor invidunt ut labore et
            doloremagna aliquyamvoluptua.eirmod tempor invidunt ut labore et
            doloremagna aliquyamerat, sed diam voluptua.eirmod tempor invidunt
            utlabore et doloretempor invidunt ut labore et dolore magna
            aliquyamerat, sed diamvoluptua.eirmod tempor invidunt ut labore et
            doloremagna aliquyamvoluptua.eirmod tempor invidunt ut labore et
            doloremagna aliquyamerat, sed diam voluptua.eirmod tempor invidunt
            utlabore et dolorevoluptua.eirmod tempor invidunt ut labore et
            doloremagna aliquyamerat, sed diam voluptua.eirmod tempor invidunt
            utlabore et doloreerat, sed diam voluptua.eirmod tempor invidunt
            utlabore et doloremagna aliquyam erat, sed diam voluptua.eirmod
            temporinvidunt uttempor invidunt ut labore et dolore magna aliquyam
            erat,sed diamvoluptua.eirmod tempor invidunt ut labore et dolore
            magnaaliquyamvoluptua.eirmod tempor invidunt ut labore et dolore
            magnaaliquyamerat, sed diam voluptua.eirmod tempor invidunt ut
            labore etdolorevoluptua.eirmod tempor invidunt ut labore et dolore
            magnaaliquyamerat, sed diam voluptua.eirmod tempor invidunt ut
            labore etdoloreerat, sed diam voluptua.eirmod tempor invidunt ut
            labore etdoloremagna aliquyam erat, sed diam voluptua.eirmod tempor
            inviduntutvoluptua.eirmod tempor invidunt ut labore et dolore
            magnaaliquyamerat, sed diam voluptua.eirmod tempor invidunt ut
            labore etdoloreerat, sed diam voluptua.eirmod tempor invidunt ut
            labore etdoloremagna aliquyam erat, sed diam voluptua.eirmod tempor
            inviduntuterat, sed diam voluptua.eirmod tempor invidunt ut labore
            etdoloremagna aliquyam erat, sed diam voluptua.eirmod tempor
            inviduntutmagna aliquyam erat, sed diam voluptua.eirmod tempor
            inviduntutlabore et dolore magna aliquyam erat, sed
            diamvoluptua.eirmodlabore et dolore magna aliquyam erat, sed
            diamvoluptua.eirmodtempor invidunt ut labore et dolore magna
            aliquyamerat, sed diamtempor invidunt ut labore et dolore magna
            aliquyamerat, sed diamvoluptua.eirmod tempor invidunt ut labore et
            doloremagna aliquyamtempor invidunt ut labore et dolore magna
            aliquyamerat, sed diamvoluptua.eirmod tempor invidunt ut labore et
            doloremagna aliquyamvoluptua.eirmod tempor invidunt ut labore et
            doloremagna aliquyamerat, sed diam voluptua.eirmod tempor invidunt
            utlabore et doloretempor invidunt ut labore et dolore magna
            aliquyamerat, sed diamvoluptua.eirmod tempor invidunt ut labore et
            doloremagna aliquyamvoluptua.eirmod tempor invidunt ut labore et
            doloremagna aliquyamerat, sed diam voluptua.eirmod tempor invidunt
            utlabore et dolorevoluptua.eirmod tempor invidunt ut labore et
            doloremagna aliquyamerat, sed diam voluptua.eirmod tempor invidunt
            utlabore et doloreerat, sed diam voluptua.eirmod tempor invidunt
            utlabore et doloremagna aliquyam erat, sed diam voluptua.eirmod
            temporinvidunt uttempor invidunt ut labore et dolore magna aliquyam
            erat,sed diamvoluptua.eirmod tempor invidunt ut labore et dolore
            magnaaliquyamvoluptua.eirmod tempor invidunt ut labore et dolore
            magnaaliquyamerat, sed diam voluptua.eirmod tempor invidunt ut
            labore etdolorevoluptua.eirmod tempor invidunt ut labore et dolore
            magnaaliquyamerat, sed diam voluptua.eirmod tempor invidunt ut
            labore etdoloreerat, sed diam voluptua.eirmod tempor invidunt ut
            labore etdoloremagna aliquyam erat, sed diam voluptua.eirmod tempor
            inviduntutvoluptua.eirmod tempor invidunt ut labore et dolore
            magnaaliquyamerat, sed diam voluptua.eirmod tempor invidunt ut
            labore etdoloreerat, sed diam voluptua.eirmod tempor invidunt ut
            labore etdoloremagna aliquyam erat, sed diam voluptua.eirmod tempor
            inviduntuterat, sed diam voluptua.eirmod tempor invidunt ut labore
            etdoloremagna aliquyam erat, sed diam voluptua.eirmod tempor
            inviduntutmagna aliquyam erat, sed diam voluptua.eirmod tempor
            inviduntutlabore et dolore magna aliquyam erat, sed diam
            voluptua.eirmo
          </p>
        </div>
        <div style={{ height: "100px" }}></div>
        <div id="footer">
          <div className="content-wrap">
            <img
              style={{ width: "100%" }}
              src="Footer.png"
              className="animate"
            />
            <div
              style={{
                backgroundColor: "#006020",
                width: "100%",
                height: "200px",
                marginTop: "-5px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;