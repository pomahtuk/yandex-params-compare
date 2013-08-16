# Напишите систему сравнения двух наборов параметров форм (включая html-интерфейс). 
# Имена параметров могут повторяться. Система должна отвечать на вопрос: «Что изменилось в параметрах?».

$ ->
  $('.compare').click ->
    form1        = {}
    form2        = {}
    meta_obj     = {}
    errors       = []
    form1_visual = ''
    form2_visual = ''
    try
      form1 = JSON.parse $('#form1').val()
      try
        form2 = JSON.parse $('#form2').val()
      catch
        errors.push 'Form 2 JSON is invalid'
    catch
      errors.push 'Form 1 JSON is invalid'

    if errors.length is 0
<<<<<<< HEAD
      $('.messages').html()
=======
      $('.messages').html ''
>>>>>>> master

      for key, value of form1
        meta_obj[key] = {}
        meta_obj[key].form1_val  = value
        meta_obj[key].form2_val  = form2[key]
        meta_obj[key].equal      = value is form2[key]
        meta_obj[key].exist_both = value? && form2[key]?
        meta_obj[key].exist_both = value? && form2[key]?
        unless meta_obj[key].exist_both
          meta_obj[key].missed_in = 'form2'

      for key, value of form2
        unless meta_obj[key]?
          meta_obj[key] = {}
          meta_obj[key].form1_val  = undefined
          meta_obj[key].form2_val  = value
          meta_obj[key].equal      = false
          meta_obj[key].exist_both = false
          meta_obj[key].missed_in = 'form1'

      console.log meta_obj

      for key, value of meta_obj
        form1_missed = false
        form2_missed = false
        same_class   =  if value.equal is true 
          'same' 
        else 
          'not_same'
        exiast_class   =  if value.exist_both is true 
          'exist' 
        else 
          'not_exist'
        form1_missed = 'missed' if value.missed_in is 'form1'
        form2_missed = 'missed' if value.missed_in is 'form2'
        form1_visual += "<div class='key #{same_class} #{exiast_class} #{form1_missed}'>#{key}: #{value.form1_val}</div>"
        form2_visual += "<div class='key #{same_class} #{exiast_class} #{form2_missed}'>#{key}: #{value.form2_val}</div>"

      $('#form2_visual').html form2_visual
      $('#form1_visual').html form1_visual

    else
      html = ''
      for error in errors
        html += "<div class='error'>#{error}</div>"
      $('.messages').html html
<<<<<<< HEAD
=======
      $('#form2_visual').html ''
      $('#form1_visual').html ''
>>>>>>> master
