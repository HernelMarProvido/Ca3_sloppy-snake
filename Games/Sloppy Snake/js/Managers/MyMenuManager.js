class MyMenuManager extends MenuManager {

    constructor(id, notificationCenter, keyboardManager) {

        super(id);

        this.notificationCenter = notificationCenter;
        this.keyboardManager = keyboardManager;

        this.initialize();

        // Register this object for notifications
        this.registerForNotifications();
    }

    registerForNotifications() {

        // When a 'menu' event fires, call the 'handleMenuNotification' function of 'this' object
        this.notificationCenter.register(
            NotificationType.Menu,
            this,
            this.handleMenuNotification
        );
    }

    handleMenuNotification(notification) {

        switch (notification.notificationAction) {

            case NotificationAction.ShowMenuChanged:

                this.showMenu(notification.notificationArguments[0]);
                break;

            default:
                break;
        }
    }

    showMenu(statusType) {

        // Check out the initialize function of this class. In it, we create a 'Menu' notification
        // whenever the play button is pressed. This notification has an action of ShowMenuChanged,
        // and an argument of [StatusType.Updated | StatusType.Drawn]. The handleMenuNotification 
        // function of this class is registered to the 'Menu' event. So, it will be called whenever
        // a 'Menu' notification is created. In the handleMenuNotification, we call this showMenu
        // function if the notification's action is of type 'ShowMenuChanged'. We also pass through 
        // the parameters that were added to the notification - [StatusType.Updated | StatusType.Drawn] 
        // in our case.

        // So, the statusType that is passed to this function will ultimately be [StatusType.Updated |
        // StatusType.Drawn] (or simply '3', if we work it out). 

        // This means, that when the user presses the 'play' button, a ShowMenuChanged notification is
        // created, which ultimately tells this function to hide the menu. On the other hand, we could
        // tell this notification to show the menu, by creating another ShowMenuChanged notification, but
        // by passing through a StatusType of off.

        // The reason why we use [StatusType.Drawn | StatusType.Updated] to turn off the menu, and 
        // [StatusType.Off] to turn on the menu, is because the same notification is sent to the
        // object manager, which ultimately tells it to start Updating and Drawing if the menu is
        // turned off, or to stop Updating and Drawing if the menu is turned on. Here we see how
        // one notification may be used to control multiple separate elements.

        // If we created an event to tell the ObjectManager to draw and update,
        // then it means we want the game to run i.e. hide the menu
        if (statusType != 0) {

            $('#main_menu').hide();
        }

        else {

            $('#main_menu').show();
        }
    }

    initialize() {

        // To Hide all the other menu when a menu is selected

        // Hide the exit menu
        $('#exit_menu').hide();
        $('#exit_menu').addClass('hidden');

        // Hide the control menu
        $('#control_menu').hide();
        $('#control_menu').addClass('hidden');

        // Hide the profile menu
        $('#profile_menu').hide();
        $('#profile_menu').addClass('hidden');

        // If the play button is clicked
        $('.play').click(function () {

            // Hide the menu
            $('#main_menu').hide();

            // Send a notification to update and draw the game
            notificationCenter.notify(
                new Notification(
                    NotificationType.Menu,
                    NotificationAction.ShowMenuChanged,
                    [StatusType.Updated | StatusType.Drawn]
                )
            );
            // Send a notification to start the game background music When player select Start. 
            notificationCenter.notify(
                new Notification(
                    NotificationType.Sound,
                    NotificationAction.Play,
                    // Plays background theme
                    ["background_sound"]
                )
            );
        });

        // If the audio button is clicke
        let sound = false;
        if(sound === false){
        $('#audio_button').click(function () {

            // Plays main music theme of game
            
            notificationCenter.notify(
                new Notification(
                    NotificationType.Sound,
                    NotificationAction.Play,
                    ["background_sound"],
                    
                ),
                sound = true
            );
               

            console.log("You clicked the audio button!");
        
        });
         }

        // if(sound === true){
        // $('#audio_button').click(function () {

        //     // Music is pause if sound is true.
            
        //          notificationCenter.notify(
        //         new Notification(
        //             NotificationType.Sound,
        //             NotificationAction.Pause,
        //             [""],
        //         ),
        //         sound = false
        //     );
           
           

        //     console.log("You clicked the audio button!");
        
        // });
        //  }

        
        // If the exit button is clicked
        $('.exit').click(function () {

            // Show exit menu
            $('#exit_menu').show();
            $('#exit_menu').removeClass('hidden');
        });

        // If the control button is clicked
        $('.control').click(function () {

            // Show control menu
            $('#control_menu').show();
            $('#control_menu').removeClass('hidden');
        });

        // If the profile button is clicked
        $('.profile').click(function () {

            // Show profile menu
            $('#profile_menu').show();
            $('#profile_menu').removeClass('hidden');
        });

        
        // // If the profile button is clicked
        // $('.control.return').click(function () {
        //     $('#return').show(document.location.reload());           
        // });
    }

    update(gameTime) {

        // TO DO: Add code to listen for a 'pause key' press, and show/hide the menu accordingly
    }
}