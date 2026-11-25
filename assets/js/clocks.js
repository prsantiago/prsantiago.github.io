(function () {
  try {
    var formatTime = function (timeZone) {
      return new Intl.DateTimeFormat('en-GB', {
        timeZone: timeZone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(new Date());
    };

    var updateClocks = function () {
      var mxEl = document.getElementById('tz-mx');
      var dkEl = document.getElementById('tz-dk');
      if (mxEl) mxEl.textContent = formatTime('America/Mexico_City');
      if (dkEl) dkEl.textContent = formatTime('Europe/Copenhagen');
    };

    updateClocks();
    setInterval(updateClocks, 30000);
  } catch (_) {}
})();
