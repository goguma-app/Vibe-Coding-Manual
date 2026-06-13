document.addEventListener("DOMContentLoaded", function () {
  const footerTarget = document.getElementById("common-footer");
  if (!footerTarget) {
    return;
  }

  const currentYear = new Date().getFullYear();
  const homeUrl = "./index.html";
  const repoUrl = "https://github.com/goguma-app/Vibe-Coding-Manual";
  const brandUrl = "https://goguma.app";

  footerTarget.innerHTML = `
    <footer>
      <p>Powered by <a href="${brandUrl}" target="_blank" rel="noreferrer noopener">goguma.app</a> · ${currentYear}</p>
      <div class="footer-nav">
        <a href="${homeUrl}"> <strong>메인 홈으로</strong></a> |
        <a href="${repoUrl}" target="_blank" rel="noreferrer noopener"> <strong>GitHub에서 이 문서 수정하기</strong></a>
      </div>
    </footer>
  `;
});