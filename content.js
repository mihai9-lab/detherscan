const isContract = document.querySelector("#content > section:nth-child(13) > div > div.d-flex.flex-column.gap-2 > div > div.d-flex.flex-wrap.align-items-center.gap-2 > div > h1").innerHTML.includes('Contract')
if(isContract){
  const link = window.location.href;
  const dethLink = link.replace('.io','.deth.net');
  const button = `
    <a id="deth-link" href="${dethLink}" class="btn btn-sm btn-primary">
      <img src="https://etherscan.deth.net/favicon.svg" alt="deth.net"/>
      Deth
    </a>`;

  document.querySelector("#masterHeader > nav > div > a").innerHTML += button
}
