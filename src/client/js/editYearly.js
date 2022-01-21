import {
  formSubmit,
  preventSubmit,
  addSub,
  showOrHideMeasureSettings,
  formatMeasureSettingDatas,
  hideDeleted,
  handleTermStartChange,
} from "./sharedAll";

const form = document.querySelector("form");
const subList = document.querySelector(
  "div.editYearly__form__form-container ul"
);
const addSubBtn = document.querySelector(".addSub-btn");
const submitBtn = document.querySelector(".submit-btn");
const deleteBtns = document.querySelectorAll(".deleteBtn");

for (let i = 0; i < deleteBtns.length; i++) {
  deleteBtns[i].addEventListener("click", hideDeleted);
}

//단위 사용 체크 시 단위명, 목표 달성 요구치 입력란 보여주기(체크 해제 시 숨기기)
const useMeasureCheckboxes = document.querySelectorAll(
  ".measurement-setting-box__use-measurement-checkbox"
);

useMeasureCheckboxes.forEach((box) =>
  box.addEventListener("click", showOrHideMeasureSettings)
);

form.addEventListener("submit", preventSubmit);
addSubBtn.addEventListener("click", () => addSub(subList));
submitBtn.addEventListener("click", () => {
  formatMeasureSettingDatas();
  formSubmit(form);
});

//시작일 input에 따른 종료일 조정
const termStart = document.getElementById("termStart");
const termEnd = document.getElementById("termEnd");

termStart.addEventListener("change", (event) =>
  handleTermStartChange(event, termEnd, "yearly")
);
