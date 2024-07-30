String.prototype.toNum = function () {
  return parseInt(this, 10);
};

const dicesEl = $("#dices"),
  facesEl = $("#faces"),
  bonusEl = $("#bonus"),
  onusEl = $("#onus"),
  difficultyEl = $("#difficulty"),
  rollEl = $("#roll"),
  cleanEl = $("#clean"),
  rollingEl = $("#rolling"),
  resultEl = $("#result"),
  res_diceN = $("#res_diceN"),
  res_faceN = $("#res_faceN"),
  res_bonusN = $("#res_bonusN"),
  res_onusN = $("#res_onusN"),
  res_diffN = $("#res_diffN"),
  res_N = $("#res_N"),
  res_diffPercent = $("#res_diffPercent"),
  res_word = $("#res_word"),
  res_emote = $("#res_emote");

$(() => {
  cleanEl.click(() => {
    resultEl.hide();
  });

  rollEl.click(() => {
    rollingEl.empty();

    let dices = dicesEl.val().toNum(),
      faces = facesEl.val().toNum(),
      bonus = bonusEl.val().toNum(),
      onus = onusEl.val().toNum(),
      difficulty = difficultyEl.val().toNum(),
      total = faces * dices;

    let result = 0;

    for (let i = 0; i < dices; i++) {
      let diceRes = rando(1, faces);

      rollingEl.append(
        `<div class="cell"><h3 class='has-text-centered has-text-weight-bold'>${diceRes}</h3></div>`
      );

      result += diceRes;
    }
    result += bonus - onus;
    let resultPercent = Math.trunc((result * 100) / total);
    let win = resultPercent > difficulty;

    res_diceN.html(dices);
    res_faceN.html(faces);
    res_bonusN.html(bonus);
    res_onusN.html(onus);
    res_diffN.html(difficulty + "%");
    res_N.html(result);
    res_diffPercent.html(resultPercent + "%");

    if (win) {
      res_word.addClass("has-text-success");
      res_emote.addClass("has-text-success");
      res_word.removeClass("has-text-danger");
      res_emote.removeClass("has-text-danger");
    } else {
      res_word.addClass("has-text-danger");
      res_emote.addClass("has-text-danger");
      res_word.removeClass("has-text-success");
      res_emote.removeClass("has-text-success");
    }

    res_word.html(win ? "sucesso" : "fracassooo");
    res_emote.html(win ? " (͠≖ ͜ʖ͠≖)👌" : " (ง︡'-'︠)ง");

    resultEl.show();
  });
});
