import axios from "axios";

const api = {
  baseUrl: "http://localhost:5099/",
  imageUrl: "http://localhost:5099/images/",
};

export let imageUrl = api.imageUrl;

//-- api call

export const hentOmos = () => {
  let response = axios
    .get(api.baseUrl + "about")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });

  return response;
};

export const hentTours = () => {
  let response = axios
    .get(api.baseUrl + "tours")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });

  return response;
};

export const delTours = (id) => {
  let response = axios
    .delete(api.baseUrl + "tours/admin/" + id)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });

  return response;
};

export const opretTours = (nyTours) => {
  let response = axios
    .post(api.baseUrl + "tours/admin", nyTours)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });

  return response;
};

export const retTours = (id, rettetTours) => {
  let response = axios
    .put(api.baseUrl + "tours/admin/" + id, rettetTours)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });

  return response;
};

export const hentIdTours = (id) => {
  let response = axios
    .get(api.baseUrl + "tours/" + id)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });

  return response;
};

export const søgTours = (soegord) => {
  let response = axios
    .get(api.baseUrl + "tours/soeg/" + soegord)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });

  return response;
};

export const opretBesked = (nybesked) => {
  let response = axios
    .post(api.baseUrl + "contact", nybesked)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });

  return response;
};

export const hentFooter = () => {
  let response = axios
    .get(api.baseUrl + "footer")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });

  return response;
};

export const hentKontakt = () => {
  let response = axios
    .get(api.baseUrl + "contactinformation")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });

  return response;
};

export const retAbout = (rettetAbout) => {
  let response = axios
    .put(api.baseUrl + "about/admin/", rettetAbout)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });

  return response;
};

export const retKtInfo = (rettetKtInfo) => {
  let response = axios
    .put(api.baseUrl + "contactinformation/admin/", rettetKtInfo)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });

  return response;
};

export const retFooter = (rettetFooter) => {
  let response = axios
    .put(api.baseUrl + "footer/admin/", rettetFooter)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });

  return response;
};

export const hentContact = () => {
  let response = axios
    .get(api.baseUrl + "contact/admin")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });

  return response;
};

export const delContact = (id) => {
  let response = axios
    .delete(api.baseUrl + "contact/admin/" + id)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });

  return response;
};