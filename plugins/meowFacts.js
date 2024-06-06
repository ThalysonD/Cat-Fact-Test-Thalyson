export default ({ app }, inject) => {
  inject("meowFacts", {
    async getFact() {
      const response = await fetch("https://meowfacts.herokuapp.com/");
      const data = await response.json();
      return data.data[0];
    },
  });
};
