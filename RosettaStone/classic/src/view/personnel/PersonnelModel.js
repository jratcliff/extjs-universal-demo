Ext.define('RosettaStone.view.personnel.PersonnelModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.personnel',

    data: {
        personnelRecord: null
    },

    formulas: {

        isModelValid: {
            bind: {
                bindTo: '{personnelRecord}',
                deep: true
            },
            get: function (rec) {
                var view = this.getView(),
                    isModelValid = (rec && rec.isModel) && rec.isValid();

                if (rec && rec.isModel) {
                    // if the model was not valid then isFormValid should have been false                
                    if (isModelValid === false) {
                        this.set('isFormValid', false);
                    }

                    // this may be chatty but each time the record changes we need
                    // to tell all forms to mark all fields that are invalid
                    Ext.Array.each(view.query('form'), function (form) {
                        form.isValid();
                    });
                }

                // finally, return the value of isModelValid
                return isModelValid;
            }
        },

        isModelDirty: {
            bind: {
                bindTo: '{personnelRecord}',
                deep: true
            },
            get: function (rec) {
                return (rec && rec.isModel) && rec.dirty;
            }
        },

        /**
         * Two-way formula for setting/getting the _isFormValid vm property.
         * There is a validity change listener in the ViewController that will
         * set this value when the form's validity changes.
         */
        isFormValid: {
            get: function (get) {
                var _isFormValid = get('_isFormValid');

                if (Ext.isBoolean(_isFormValid)) {
                    return _isFormValid;
                } else {
                    return true;
                }
            },
            set: function (isFormValid) {
                var view = this.getView();

                // Since we do not know how many forms a screen can have we loop over all of the
                // forms and call the isValid method on each so that invalid fields are marked.
                if (!isFormValid) {
                    Ext.Array.each(view.query('form'), function (form) {
                        form.isValid();
                    });
                }

                // now we can set the internal _isFormValid property
                this.set('_isFormValid', isFormValid);
            }
        },

        /**
         * In order to save, the following all must be true
         *  1 - the partnership record must have changes (dirty flag)
         *  2 - the partnership record must pass validation (model usually matches the form fields but we double check things)
         *  3 - the form must be valid (all form fields pass validation)
         */
        canSave: {
            bind: {
                isModelDirty: '{isModelDirty}',
                isModelValid: '{isModelValid}',
                isFormValid: '{isFormValid}'
            },
            get: function (obj) {
                var isModelDirty = obj.isModelDirty,
                    isModelValid = obj.isModelValid,
                    isFormValid = obj.isFormValid;

                return isModelDirty && isFormValid && isModelValid;
            }
        },

        validationMessage: {
            bind: {
                isModelValid: '{isModelValid}',
                isFormValid: '{isFormValid}'
            },
            get: function (obj) {
                var isModelValid = obj.isModelValid,
                    isFormValid = obj.isFormValid,
                    needsMsg = (isModelValid === false) || (isFormValid === false);

                if (needsMsg) {
                    return 'Invalid or missing data.  Please correct before saving or processing.';
                } else {
                    return false;
                }
            }
        },

        pendingChangesMessage: {
            bind: {
                canSave: '{canSave}'
            },
            get: function (obj) {
                var canSave = obj.canSave;

                return canSave ? 'There are pending changes.  This partnership must be saved before it can be processed.' : '';
            }
        }

    }

});
