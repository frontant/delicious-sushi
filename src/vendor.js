import 'intersection-observer';
import installCE from 'document-register-element/pony';

installCE(window, {
  type: 'force',
  noBuiltIn: true,
});
