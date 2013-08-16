(function() {
  $(function() {
    return $('.compare').click(function() {
      var error, errors, exiast_class, form1, form1_missed, form1_visual, form2, form2_missed, form2_visual, html, key, meta_obj, same_class, value, _i, _len;
      form1 = {};
      form2 = {};
      meta_obj = {};
      errors = [];
      form1_visual = '';
      form2_visual = '';
      try {
        form1 = JSON.parse($('#form1').val());
        try {
          form2 = JSON.parse($('#form2').val());
        } catch (_error) {
          errors.push('Form 2 JSON is invalid');
        }
      } catch (_error) {
        errors.push('Form 1 JSON is invalid');
      }
      if (errors.length === 0) {
        $('.messages').html();
        for (key in form1) {
          value = form1[key];
          meta_obj[key] = {};
          meta_obj[key].form1_val = value;
          meta_obj[key].form2_val = form2[key];
          meta_obj[key].equal = value === form2[key];
          meta_obj[key].exist_both = (value != null) && (form2[key] != null);
          meta_obj[key].exist_both = (value != null) && (form2[key] != null);
          if (!meta_obj[key].exist_both) {
            meta_obj[key].missed_in = 'form2';
          }
        }
        for (key in form2) {
          value = form2[key];
          if (meta_obj[key] == null) {
            meta_obj[key] = {};
            meta_obj[key].form1_val = void 0;
            meta_obj[key].form2_val = value;
            meta_obj[key].equal = false;
            meta_obj[key].exist_both = false;
            meta_obj[key].missed_in = 'form1';
          }
        }
        console.log(meta_obj);
        for (key in meta_obj) {
          value = meta_obj[key];
          form1_missed = false;
          form2_missed = false;
          same_class = value.equal === true ? 'same' : 'not_same';
          exiast_class = value.exist_both === true ? 'exist' : 'not_exist';
          if (value.missed_in === 'form1') {
            form1_missed = 'missed';
          }
          if (value.missed_in === 'form2') {
            form2_missed = 'missed';
          }
          form1_visual += "<div class='key " + same_class + " " + exiast_class + " " + form1_missed + "'>" + key + ": " + value.form1_val + "</div>";
          form2_visual += "<div class='key " + same_class + " " + exiast_class + " " + form2_missed + "'>" + key + ": " + value.form2_val + "</div>";
        }
        $('#form2_visual').html(form2_visual);
        return $('#form1_visual').html(form1_visual);
      } else {
        html = '';
        for (_i = 0, _len = errors.length; _i < _len; _i++) {
          error = errors[_i];
          html += "<div class='error'>" + error + "</div>";
        }
        return $('.messages').html(html);
      }
    });
  });

}).call(this);
