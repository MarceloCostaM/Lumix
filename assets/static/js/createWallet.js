async function createWallet() {
    const apiKey =
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicHJvamVjdElkIjoiYTczYzc4MGEtZmQxNC00YjlhLTkyNWUtN2U0ZmY2YTZmNDljIiwic2NvcGVzIjpbIlJFQURfV0FMTEVUUyIsIlJFQURfQ09OVFJBQ1RTIiwiUkVBRF9UT0tFTl9UWVBFUyIsIlJFQURfVFJBTlNBQ1RJT05TIiwiREVQTE9ZX0NPTlRSQUNUUyIsIldSSVRFX0NPTlRSQUNUUyIsIldSSVRFX0NVU1RPTV9UUkFOU0FDVElPTlMiLCJXUklURV9NSU5UUyIsIldSSVRFX01JTlRTIiwiV1JJVEVfVE9LRU5fVFlQRVMiLCJXUklURV9UUkFOU0ZFUlMiLCJXUklURV9XQUxMRVRTIl0sImlhdCI6MTcxNDg2NzA2OX0.d75DxGH9KsdHrFoFkz-OjkAj0ksEIKp1q86XEYZHWBNuiAwjHthyeyI5DxhoA5OjUweJcfPB30e3ePFi4bJulls2ReLQIAsqWdwrgBrjAjkZ2hlBKbr8ea86kDVONR6ndSHn4GQhfqVmnLaaqblv_W3caXYajtk8onCGqFAZ7VAxL5TX-Fi0vSZQqOt2sm9yIB7D5cW39cRtI216KOwkEakhZeJQNE3oTqAi1k1D8CAh3U19fXiTHooO44gOQmAJSA7i_l0nbbkxHTUFHFb-XPq5416pVH1-Fipp3kd19t2FerzZ1kwjdgxicvFZqcl3R3x8PkJazObjqsNI-8hM6caSKqWoNw1hP-DtVNgRitqQDDCmpNXKGZMmu_Uic255q6HLSap5jl1TCzaf0M-heG20cyaD9vLip9ZKI2N7gEYp1D4Gak9gc1EbYecr7xBGSiw8e8wLCqXvdx8m50edUeEsX-Y9xEjZ2HQnrV1gD4nlIYIGWzQOe_vwLrz8I3R6wcb3PE-MTfdTE68OT3lcYZklbbiyxwZ3Qc5h5E5TFgvaLtDI_obatzuhWSyQ0VPTclScpOoDv4HRwJZ5Mwgw-NkMuhRsVcAWkl_nOPI5BAC_O4a_ksxyNtye4-zIub9ogDj2tbG7_iRo_VBVHmB3cLYBWE4gJjF_1bh6GWAdajQ";
  
    const options = {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}` },
    };
  
    debugger;
  
    let retornoApiLumx = fetch(
      "https://protocol-sandbox.lumx.io/v2/wallets",
      options
    )
      .then((response) => response.json())
      .then((response) => response)
      .catch((err) => console.error(err));
  
    return await retornoApiLumx;
  }
  
  async function showReturn() {
    let retornoApi = await createWallet();
    if (retornoApi.id) {
      limparTela();
      showInformations(retornoApi.id);
    }
    console.log(retornoApi);
  }
  
  //* Evento ao apertar
  document.addEventListener("keypress", (event) => {
    if (event.code == "Enter") {
      showReturn();
    }
  });
  
  //* Evento ao clicar
  document.addEventListener("click", (event) => {
    //! ver aqui
    const element = event.target;
    if (element.classList.contains("btn-reg")) {
      showReturn();
    }
    if (element.classList.contains("btn-home-id")) {
      voltaHome();
    }
  });
  
  function limparTela() {
    // Remove o elemento pai principal
    let paiPrincipal = document.body.parentNode;
    paiPrincipal.removeChild(document.body);
  
    // Cria um novo elemento body
    let novoBody = document.createElement("body");
    novoBody.innerHTML = "";
  
    // Adiciona o novo body ao elemento pai principal
    paiPrincipal.appendChild(novoBody);
  }
  
  function showInformations(id) {
    // Cria um novo elemento <p> e <h1>

    let pId = document.createElement("p");
    let h1Id = document.createElement("h1");
    let btnHome = document.createElement("button");

    // Adiciona conteúdo ao parágrafo

    let textId = document.createTextNode(id);
    let textH1Id = document.createTextNode("Este é seu ID!");
    let textBtnHome = document.createTextNode("Home");

    pId.appendChild(textId);
    h1Id.appendChild(textH1Id);
    btnHome.appendChild(textBtnHome);

    // Adiciona uma classe ao parágrafo
    
    h1Id.classList.add("h1-id");
    document.body.appendChild(h1Id);
    pId.classList.add("p-id");
    document.body.appendChild(pId);
    btnHome.classList.add("btn-home-id");
    document.body.appendChild(btnHome);
  }
  
  function voltaHome() {
    window.location.href = "home";
  }
  