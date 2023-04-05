const isContract = document.querySelector("#content > section:first-of-type > div > div:first-of-type > div > div:first-of-type > div > h1").innerHTML.includes('Contract')
if(isContract){
  const link = window.location.href;
  const dethLink = link.replace('.io','.deth.net');
  const button = `
    <a id="deth-link" href="${dethLink}" class="btn btn-sm btn-primary" target="_blank">
      <img src="https://etherscan.deth.net/favicon.svg" alt="deth.net"/>
      Deth
    </a>`;

  document.querySelector("#masterHeader > nav > div > a").innerHTML += button
}
