QUnit.module("masodfokuEgyenletMegoldasa", function () {
  QUnit.test("1Létezik e a masodfokuEgyenletMegoldasa?", function (assert) {
    assert.ok(
      masodfokuEgyenletMegoldasa,
      "Létezik a masodfokuEgyenletMegoldasa?"
    );
  });
  QUnit.test("2A szám e?", function (assert) {
    assert.equal(
      masodfokuEgyenletMegoldasa,
      a == double || a == int,
      "2A szám e"
    );
  });

  QUnit.test("3B szám e?", function (assert) {
    assert.equal(
      masodfokuEgyenletMegoldasa,
      b == double || b == int,
      "B szám e?"
    );
  });

  QUnit.test("4C szám e?", function (assert) {
    assert.equal(
      masodfokuEgyenletMegoldasa,
      c == double || c == int,
      "C szám e?"
    );
  });

  QUnit.test("5x1 szám e ?", function (assert) {
    assert.equal(
      masodfokuEgyenletMegoldasa,
      x1 == double || x1 == int,
      "x1 szám e?"
    );
  });

  QUnit.test("6x2 szám e?", function (assert) {
    assert.equal(
      masodfokuEgyenletMegoldasa,
      x2 == double || x2 == int,
      "x2 szám e?"
    );
  });

  QUnit.test(
    "7let x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a) mükszik?",
    function (assert) {
      assert.equal(
        masodfokuEgyenletMegoldasa,
        (x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a)),
        "jó e a fügvény x1-re?"
      );
    }
  );

  QUnit.test(
    "8let x2 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a) mükszik?",
    function (assert) {
      assert.equal(
        masodfokuEgyenletMegoldasa,
        (x2 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a)),
        "jó e a fügvény x2-re?"
      );
    }
  );
});
